'use client';

import { useEffect, useState } from 'react';
import { TextField, Card, CardContent, CardMedia, Typography, Grid, Container, Box, Link } from '@mui/material';

// Definice typu pro kupóny
type Coupon = {
  Platform: string;
  Kupon: string;
  URL: string;
  Logo: string;
};

export default function HomePage() {
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [search, setSearch] = useState('');

  // Načtení dat z /api/coupons
  useEffect(() => {
    const fetchCoupons = async () => {
      try {
        const res = await fetch('/api/coupons');
        const data = await res.json();
        setCoupons(data);
      } catch (error) {
        console.error('Chyba při načítání dat:', error);
      }
    };
    fetchCoupons();
  }, []);

  // Filtrování kupónů podle zadaného textu
  const filteredCoupons = coupons.filter((item) => {
    const term = search.toLowerCase();
    return (
      item.Platform.toLowerCase().includes(term) ||
      item.Kupon.toLowerCase().includes(term)
    );
  });

  return (
    <Container>
      <Box my={4}>
        {/* Vyhledávací pole */}
        <TextField
          label="Hledat (podle platformy nebo kódu)"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          fullWidth
          sx={{ maxWidth: 400, mb: 2 }}
        />

        {/* Grid pro karty */}
        <Grid container spacing={3}>
          {filteredCoupons.map((coupon, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card>
                {/* Logo */}
                {coupon.Logo && (
                  <CardMedia
                    component="img"
                    height="140"
                    image={coupon.Logo}
                    alt={coupon.Platform}
                    sx={{ objectFit: 'contain', bgcolor: '#f5f5f5' }}
                  />
                )}

                <CardContent>
                  {/* Název platformy */}
                  <Typography variant="h6" component="div">
                    {coupon.Platform || '-'}
                  </Typography>

                  {/* Kód kupónu */}
                  <Typography variant="body1" color="text.secondary">
                    {coupon.Kupon ? `Kód: ${coupon.Kupon}` : 'Žádný kód'}
                  </Typography>

                  {/* Odkaz */}
                  {coupon.URL && (
                    <Box mt={1}>
                      <Link href={coupon.URL} target="_blank" rel="noopener noreferrer">
                        Odkaz na nabídku
                      </Link>
                    </Box>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
