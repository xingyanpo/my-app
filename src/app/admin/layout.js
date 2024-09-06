export const metadata = {
  title: "My Admin",
  description: "This is admin page",
};

export default function RootLayout({ children }) {
  return (
    <main>{children}</main>
  );
}