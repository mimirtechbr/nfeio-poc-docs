import React from "react";

export default function HomePageSectionTitleOne({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          {subtitle}
        </p>
      )}
    </header>
  );
}