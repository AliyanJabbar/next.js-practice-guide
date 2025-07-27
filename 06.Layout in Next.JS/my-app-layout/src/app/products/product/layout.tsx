export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h3>This Is Our Product</h3>
      {children}
      <ul>
        <li>Order</li>
        <li>Payment</li>
        <li>Delivery</li>
      </ul>
    </div>
  );
}
