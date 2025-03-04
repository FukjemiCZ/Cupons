"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

// Typ pro menu položky
interface MenuItem {
  name: string;
  url: string;
}

export default function NavigationBar() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const AppName = process.env.NEXT_PUBLIC_APP_NAME || "My Referral Coupons";
  useEffect(() => {
    fetch("/api/menu")
      .then((res) => res.json())
      .then((data) => {
        setMenuItems(data.menu || []);
      })
      .catch((err) => {
        console.error("Error loading menu items:", err);
      });
  }, []);
  const navbarColor = process.env.NEXT_PUBLIC_NAVBAR_COLOR || "#bd5d38"; // Defaultní barva

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: navbarColor }}>
        <Toolbar>
          {/* Název webu vlevo */}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {AppName}
          </Typography>

          {/* Desktopové menu */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {menuItems.map((item, idx) => (
              <Button
                key={idx}
                color="inherit"
                component={Link}
                href={item.url}
              >
                {item.name}
              </Button>
            ))}
          </Box>

          {/* Mobilní hamburger menu */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Vysouvací menu pro mobil */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 250 }}>
          <List>
            {menuItems.map((item, idx) => (
              <ListItem key={idx} disablePadding>
                <ListItemButton
                  component={Link}
                  href={item.url}
                  onClick={() => setDrawerOpen(false)}
                >
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
