import React from "react";

export default function Header() {
  return (
    <>
      <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
        <div>
          <img 
            src="path/to/your/image.jpg" 
            alt="Header Image" 
            className="w-full h-auto mb-3" 
          />
        </div>
        <div>
          <h1 className="font-bold uppercase tracking-wide text-4xl mb-3">
          </h1>
        </div>
      </header>
    </>
  );
}
