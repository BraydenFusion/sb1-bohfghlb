import React from 'react';

export const FooterBottom = () => {
  return (
    <div className="mt-16 pt-8 border-t border-white/10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-text-muted">
          © {new Date().getFullYear()} Fusion AI. All rights reserved.
        </p>
      </div>
    </div>
  );
};