// @ts-nocheck
import React, {useMemo, useState} from 'react';
import Link from '@docusaurus/Link';
import integrationsData from '../../integrations.json';

// Utility to normalize string for search (case + accents + trim)
function normalize(str: string): string {
  return (str || '')
    .toLowerCase()
    .normalize('NFD')
    // Remove diacritics (accents)
    .replace(/\p{Diacritic}/gu, '')
    .replace(/\s+/g, ' ') // collapse spaces
    .trim();
}

interface IntegrationItem {
  name: string;
  provider: string;
  title: string;
  description: string;
  icon: string;
  link: string;
}

interface GroupedDocs {
  label: string;
  items: IntegrationItem[];
}

// Build groups from JSON data
function buildGroupsFromJSON(): GroupedDocs[] {
  const groups: GroupedDocs[] = [
      { label: 'Plugins', items: integrationsData.plugins },
      { label: 'Plataformas', items: integrationsData.plataformas },
      { label: 'Pluga', items: integrationsData.pluga }
  ];

  // Sort items within each group by title
  const byTitle = (a: IntegrationItem, b: IntegrationItem) =>
    a.title.localeCompare(b.title, 'pt-BR', {sensitivity: 'base'});

  groups.forEach(group => group.items.sort(byTitle));

  return groups.filter(g => g.items.length > 0);
}

const badgeColors = [
  'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
  'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300',
  'bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300',
  'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300',
  'bg-pink-100 text-pink-800 dark:bg-pink-900/40 dark:text-pink-300',
];

export default function IntegrationsIndex() {
  const groups = useMemo(() => buildGroupsFromJSON(), []);

  const [query, setQuery] = useState('');
  const normalizedQuery = normalize(query);

  const filteredGroups = useMemo(() => {
    if (!normalizedQuery) return groups;
    return groups.map(g => ({
      ...g,
      items: g.items.filter(i => [i.name, i.title, i.description, i.provider]
        .filter(Boolean)
        .map(s => normalize(String(s)))
        .some(val => val.includes(normalizedQuery))
      )
    })).filter(g => g.items.length > 0);
  }, [groups, normalizedQuery]);

  const total = groups.reduce((a, g) => a + g.items.length, 0);
  const totalFiltered = filteredGroups.reduce((a, g) => a + g.items.length, 0);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Integrações</h1>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Explore {total} integrações e plugins. Use a busca para filtrar por nome ou descrição.
          </p>
          {normalizedQuery && (
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Exibindo {totalFiltered} resultados para "{query}".
            </p>
          )}
        </div>
        <div className="w-full md:w-80">
          <label htmlFor="integrations-search" className="sr-only">Buscar integrações</label>
          <input
            id="integrations-search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar integrações..."
            className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
      </div>

      {filteredGroups.length === 0 && (
        <div className="text-sm text-gray-600 dark:text-gray-300">
          Nenhum resultado encontrado. Ajuste sua busca.
        </div>
      )}

      <div className="space-y-12">
        {filteredGroups.map((group, gi) => (
          <section key={group.label}>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span>{group.label}</span>
              <span className="text-xs font-medium rounded-full px-2 py-0.5 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                {group.items.length}
              </span>
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {group.items.map((item, di) => {
                const color = badgeColors[(gi + di) % badgeColors.length];
                return (
                  <li key={item.link} className="group list-none">
                    <Link
                      to={item.link}
                      className="block h-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/60 p-4 hover:border-primary-500 hover:shadow-sm transition-colors"
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <span className={`text-[10px] font-semibold uppercase tracking-wide rounded px-1.5 py-0.5 ${color}`}>
                          {group.label}
                        </span>
                      </div>
                      <h3 className="text-sm font-semibold mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 line-clamp-2">
                        {item.title}
                      </h3>
                      {item.description && (
                        <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-3">
                          {item.description}
                        </p>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
