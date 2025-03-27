import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  showFooter?: boolean;
}

const Layout = ({ children, showFooter = true }: LayoutProps) => {
  return (
    <div className="layout-container">
      <main className="layout-main">{children}</main>
      {showFooter && (
        <footer className="layout-footer">
          <p>© {new Date().getFullYear()} Martial Arts Test. All rights reserved.</p>
        </footer>
      )}
    </div>
  );
};

export default Layout; 