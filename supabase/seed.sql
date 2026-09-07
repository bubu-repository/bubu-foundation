-- Bubu Foundation — seed data
-- Run once after schema.sql. Safe to re-run (all inserts use ON CONFLICT).
-- Mirrors lib/seed-source.ts exactly — keep both in sync if you edit either.

insert into public.expertise_categories (id, slug, label, sort_order) values
  ('c1000000-0000-0000-0000-000000000001', 'strategy-planning', 'Strategy & Planning', 1),
  ('c1000000-0000-0000-0000-000000000002', 'creative-copywriting', 'Creative & Copywriting', 2),
  ('c1000000-0000-0000-0000-000000000003', 'design-art-direction', 'Design & Art Direction', 3),
  ('c1000000-0000-0000-0000-000000000004', 'brand-marketing', 'Brand & Marketing', 4),
  ('c1000000-0000-0000-0000-000000000005', 'media-pr', 'Media & PR', 5),
  ('c1000000-0000-0000-0000-000000000006', 'client-servicing-accounts', 'Client Servicing & Accounts', 6),
  ('c1000000-0000-0000-0000-000000000007', 'research-insights', 'Research & Insights', 7),
  ('c1000000-0000-0000-0000-000000000008', 'digital-social-media', 'Digital & Social Media', 8),
  ('c1000000-0000-0000-0000-000000000009', 'production-operations', 'Production & Operations', 9),
  ('c1000000-0000-0000-0000-000000000010', 'business-development-partnerships', 'Business Development & Partnerships', 10),
  ('c1000000-0000-0000-0000-000000000011', 'finance-administration', 'Finance & Administration', 11),
  ('c1000000-0000-0000-0000-000000000012', 'technology-data', 'Technology & Data', 12)
on conflict (id) do nothing;

insert into public.profiles
  (id, is_seed, full_name, expertise_category_id, years_experience, bio, avatar_url, linkedin_url, whatsapp_number, portfolio_links)
values
  ('a1000000-0000-0000-0000-000000000001', true, 'Ayu Kartika Sari', 'c1000000-0000-0000-0000-000000000001', 9,
   'Led brand strategy for three of BUBU''s longest-running client relationships. Now runs an independent strategy practice for F&B and lifestyle brands entering Indonesia.',
   'https://i.pravatar.cc/300?img=47', 'https://linkedin.com/in/ayukartikasari', '+6281234500001',
   array['https://ayukartika.studio', 'https://linkedin.com/in/ayukartikasari/details/featured']),

  ('a1000000-0000-0000-0000-000000000002', true, 'Yoga Prasetyo', 'c1000000-0000-0000-0000-000000000002', 14,
   'Wrote the campaign lines people still quote back to BUBU years later. Freelances for agencies across Jakarta and Singapore, mostly on brand voice work.',
   'https://i.pravatar.cc/300?img=12', 'https://linkedin.com/in/yogaprasetyo', '+6281234500002',
   array['https://yogawrites.com', 'https://instagram.com/yoga.writes']),

  ('a1000000-0000-0000-0000-000000000003', true, 'Dinda Larasati', 'c1000000-0000-0000-0000-000000000003', 11,
   'Art-directed BUBU''s biggest pitch decks and campaign visuals for a decade. Runs a small design studio focused on identity systems.',
   'https://i.pravatar.cc/300?img=32', 'https://linkedin.com/in/dindalarasati', '+6281234500003',
   array['https://behance.net/dindalarasati', 'https://instagram.com/dinda.creates']),

  ('a1000000-0000-0000-0000-000000000004', true, 'Michael Tanuwijaya', 'c1000000-0000-0000-0000-000000000004', 8,
   'Built go-to-market plans for BUBU''s retail and FMCG clients. Now leads brand marketing at a regional consumer startup.',
   'https://i.pravatar.cc/300?img=13', 'https://linkedin.com/in/michaeltanuwijaya', '+6281234500004',
   array['https://linkedin.com/in/michaeltanuwijaya/details/featured']),

  ('a1000000-0000-0000-0000-000000000005', true, 'Nadya Wijaya', 'c1000000-0000-0000-0000-000000000005', 5,
   'Handled media relations for BUBU''s launch events and crisis comms. Works in-house PR for a hospitality group.',
   'https://i.pravatar.cc/300?img=45', 'https://linkedin.com/in/nadyawijaya', '+6281234500005',
   array['https://linkedin.com/in/nadyawijaya/details/featured']),

  ('a1000000-0000-0000-0000-000000000006', true, 'Farhan Hidayat', 'c1000000-0000-0000-0000-000000000006', 10,
   'Managed BUBU''s key accounts through several years of client growth. Runs client operations for a martech company.',
   'https://i.pravatar.cc/300?img=14', 'https://linkedin.com/in/farhanhidayat', '+6281234500006',
   array['https://linkedin.com/in/farhanhidayat/details/featured']),

  ('a1000000-0000-0000-0000-000000000007', true, 'Salsabila Putri', 'c1000000-0000-0000-0000-000000000007', 4,
   'Ran consumer research for BUBU''s culture-first campaigns. Now a freelance insights consultant for early-stage brands.',
   'https://i.pravatar.cc/300?img=25', 'https://linkedin.com/in/salsabilaputri', '+6281234500007',
   array['https://salsabila-insights.com']),

  ('a1000000-0000-0000-0000-000000000008', true, 'Kevin Susanto', 'c1000000-0000-0000-0000-000000000008', 7,
   'Built and ran social strategy for several of BUBU''s youth-facing clients. Currently heads digital for a media company.',
   'https://i.pravatar.cc/300?img=15', 'https://linkedin.com/in/kevinsusanto', '+6281234500008',
   array['https://instagram.com/kevin.digital']),

  ('a1000000-0000-0000-0000-000000000009', true, 'Intan Permatasari', 'c1000000-0000-0000-0000-000000000009', 12,
   'Kept BUBU''s biggest activations running on time and on budget. Freelances as a production lead for events and shoots.',
   'https://i.pravatar.cc/300?img=48', 'https://linkedin.com/in/intanpermatasari', '+6281234500009',
   array['https://linkedin.com/in/intanpermatasari/details/featured']),

  ('a1000000-0000-0000-0000-000000000010', true, 'Aditya Rahman', 'c1000000-0000-0000-0000-000000000010', 9,
   'Closed several of BUBU''s longest client partnerships. Now does BD for a SEA-focused venture studio.',
   'https://i.pravatar.cc/300?img=17', 'https://linkedin.com/in/adityarahman', '+6281234500010',
   array['https://linkedin.com/in/adityarahman/details/featured']),

  ('a1000000-0000-0000-0000-000000000011', true, 'Clara Angelina', 'c1000000-0000-0000-0000-000000000011', 6,
   'Ran finance operations for BUBU during a period of fast growth. Consults on financial ops for small agencies and studios.',
   'https://i.pravatar.cc/300?img=44', 'https://linkedin.com/in/claraangelina', '+6281234500011',
   array['https://linkedin.com/in/claraangelina/details/featured']),

  ('a1000000-0000-0000-0000-000000000012', true, 'Bagus Wirawan', 'c1000000-0000-0000-0000-000000000012', 5,
   'Built BUBU''s first internal reporting dashboards. Now a data engineer at a fintech startup.',
   'https://i.pravatar.cc/300?img=18', 'https://linkedin.com/in/baguswirawan', '+6281234500012',
   array['https://github.com/baguswirawan']),

  ('a1000000-0000-0000-0000-000000000013', true, 'Sarah Amelia Putri', 'c1000000-0000-0000-0000-000000000001', 3,
   'Started at BUBU straight out of university, working on planning for youth brands. Now a junior strategist at a regional agency.',
   'https://i.pravatar.cc/300?img=29', 'https://linkedin.com/in/sarahameliaputri', '+6281234500013',
   array['https://linkedin.com/in/sarahameliaputri/details/featured']),

  ('a1000000-0000-0000-0000-000000000014', true, 'Reza Pratama', 'c1000000-0000-0000-0000-000000000002', 6,
   'Wrote scripts and captions across BUBU''s social-first campaigns. Freelances as a copywriter for D2C brands.',
   'https://i.pravatar.cc/300?img=11', 'https://linkedin.com/in/rezapratama', '+6281234500014',
   array['https://instagram.com/reza.writes'])
on conflict (id) do nothing;

insert into public.opportunities
  (id, is_seed, posted_by_profile_id, title, category, description, looking_for, status)
values
  ('b1000000-0000-0000-0000-000000000001', true, 'a1000000-0000-0000-0000-000000000001',
   'Co-founder for a culture-research studio', 'collaboration',
   'Starting an independent studio focused on cultural intelligence for SEA brands.',
   'A co-founder with strong client relationships and a research or strategy background.', 'open'),

  ('b1000000-0000-0000-0000-000000000002', true, 'a1000000-0000-0000-0000-000000000014',
   'Volunteer creatives for a river-cleanup awareness campaign', 'social_project',
   'A community campaign around the Ciliwung river cleanup needs a small creative team — copywriter, designer, and someone comfortable on camera.',
   'Unpaid, high-impact, flexible timeline. Copywriter, designer, on-camera talent.', 'open'),

  ('b1000000-0000-0000-0000-000000000003', true, 'a1000000-0000-0000-0000-000000000007',
   'Seeking early-stage investment for a Gen-Z insights platform', 'investment',
   'Building a subscription insights platform tracking Gen-Z culture shifts across Indonesia.',
   'Angel or pre-seed investors who understand the research/insights space.', 'open'),

  ('b1000000-0000-0000-0000-000000000004', true, 'a1000000-0000-0000-0000-000000000003',
   'Freelance art director for a 3-month rebrand', 'freelance',
   'A hospitality client needs a full rebrand — logo, guidelines, collateral.',
   '3-month freelance engagement. Jakarta-based preferred, remote considered.', 'open'),

  ('b1000000-0000-0000-0000-000000000005', true, 'a1000000-0000-0000-0000-000000000013',
   'Mentor wanted for junior strategists', 'mentorship',
   'Two years into my strategy career and looking for a senior mentor for a monthly coffee chat and career guidance.',
   'Ideally ex-BUBU, senior strategy background.', 'open'),

  ('b1000000-0000-0000-0000-000000000006', true, 'a1000000-0000-0000-0000-000000000010',
   'Speaker needed for a cultural intelligence panel', 'event_speaking',
   'A university marketing program is hosting a panel on cultural intelligence in SEA marketing.',
   'One more alumni speaker with agency or brand-side experience.', 'open')
on conflict (id) do nothing;
