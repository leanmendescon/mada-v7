-- NEXUS V8 - FUNDAÇÃO
create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  prompt text not null,
  status text not null default 'researching',
  created_at timestamp default now()
);
create table if not exists architectures (
  project_id uuid references projects(id) on delete cascade primary key,
  stack jsonb,
  tables jsonb,
  apis jsonb,
  features jsonb,
  folders jsonb,
  research jsonb,
  created_at timestamp default now()
);
create table if not exists project_versions (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references projects(id) on delete cascade,
  files jsonb not null,
  build_success boolean,
  build_error text,
  created_at timestamp default now()
);
create table if not exists build_logs (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references projects(id) on delete cascade,
  agent text not null,
  message text not null,
  created_at timestamp default now()
);
