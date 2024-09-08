import Layout from '@/components/admin/sandbox/layout';

export const metadata = {
  title: "Already logged in",
  description: "This is admin page",
};

export default function RootLayout({ children }) {
  return (
    <main>
      <Layout>
        {children}
      </Layout>
    </main>
  )
}