export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
      <ul>
        <li>Order</li>
        <li>Payment</li>
        <li>Delivery</li>
      </ul>
    </div>
  );
}
