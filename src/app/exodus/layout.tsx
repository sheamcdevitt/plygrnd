import localFont from 'next/font/local';

export const exodus = localFont({
  src: [
    {
      path: './fonts/ExodusDemo-Regular.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/ExodusDemo-Sharpen.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/ExodusDemo-Shino.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/ExodusDemo-Stencil.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/ExodusDemo-Striped.otf',
      weight: '500',
      style: 'normal',
    },
  ],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={exodus.className}>{children}</body>
    </html>
  );
}
