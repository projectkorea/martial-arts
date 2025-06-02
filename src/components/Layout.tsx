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
          <span className="footer__text">ProjectKorea</span>
          <span className="footer__text">제보&문의: prodopark15@gmail.com</span>
        </footer>
      )}
    </div>
  );
};

export default Layout; 