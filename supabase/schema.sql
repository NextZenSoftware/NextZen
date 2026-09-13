create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  project text not null,
  source text not null default 'contact',
  status text not null default 'new' check (status in ('new', 'contacted', 'converted', 'closed')),
  admin_notes text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists enquiries_created_at_idx on public.enquiries (created_at desc);
create index if not exists enquiries_status_idx on public.enquiries (status);

alter table public.enquiries enable row level security;

create or replace function public.set_enquiries_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists enquiries_updated_at on public.enquiries;
create trigger enquiries_updated_at
before update on public.enquiries
for each row execute function public.set_enquiries_updated_at();

revoke all on public.enquiries from anon, authenticated;
grant insert on public.enquiries to service_role;
grant select, update on public.enquiries to service_role;

create table if not exists public.payments (
  id uuid primary key default gen_random_uuid(),
  razorpay_order_id text not null unique,
  razorpay_payment_id text unique,
  razorpay_signature text,
  plan text not null,
  amount_paise integer not null check (amount_paise > 0),
  currency text not null default 'INR',
  customer_name text not null,
  customer_email text not null,
  status text not null default 'created' check (status in ('created', 'paid', 'failed')),
  paid_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists payments_created_at_idx on public.payments (created_at desc);
create index if not exists payments_status_idx on public.payments (status);

alter table public.payments enable row level security;
revoke all on public.payments from anon, authenticated;
grant insert, select, update on public.payments to service_role;
