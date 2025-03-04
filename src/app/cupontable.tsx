"use client"; 
// ↑ Tímto řádkem říkáme Next.js, že celý tento soubor je Client Component - můžeme používat useState, eventy, apod.

import { useState } from "react";
import { Container, TextField, Table, TableBody, TableCell, TableHead, TableRow, Typography, Link, Box } from "@mui/material";

type CouponData = {
  platform: string;
  kupon: string;
  url: string;
  logo: string;
};

interface CouponTableProps {
  coupons: CouponData[];
}

export default function CouponTable({ coupons }: CouponTableProps) {
  const [searchTerm, setSearchTerm] = useState("");

  // Filtrujeme dle platformy NEBO kuponu
  const filteredCoupons = coupons.filter((item) => {
    const lowerSearch = searchTerm.toLowerCase();
    return (
      item.platform.toLowerCase().includes(lowerSearch) ||
      item.kupon.toLowerCase().includes(lowerSearch)
    );
  });

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Moje Referral kódy
      </Typography>

      <Box mb={2}>
        <TextField
          label="Hledat"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Zadejte platformu nebo kupón..."
        />
      </Box>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Platforma</TableCell>
            <TableCell>Kód / Kupón</TableCell>
            <TableCell>Odkaz</TableCell>
            <TableCell>Logo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredCoupons.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.platform}</TableCell>
              <TableCell>{item.kupon || "-"}</TableCell>
              <TableCell>
                {item.url ? (
                  <Link href={item.url} target="_blank" rel="noopener noreferrer">
                    Otevřít
                  </Link>
                ) : (
                  "-"
                )}
              </TableCell>
              <TableCell>
                {item.logo ? (
                  <img 
                    src={item.logo} 
                    alt={item.platform} 
                    style={{ width: 50, height: "auto" }} 
                  />
                ) : (
                  "-"
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}
