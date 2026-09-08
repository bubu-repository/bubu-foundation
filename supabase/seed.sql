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
  (id, is_seed, full_name, expertise_category_id, years_experience, bio, avatar_url, linkedin_url, whatsapp_number, portfolio_links, city, country_code, is_featured, is_open_to_collaborate)
values
  ('a1000000-0000-0000-0000-000000000001', true, 'Ayu Kartika Sari', 'c1000000-0000-0000-0000-000000000001', 9,
   'Led brand strategy for three of BUBU''s longest-running client relationships. Now runs an independent strategy practice for F&B and lifestyle brands entering Indonesia.',
   'https://i.pravatar.cc/300?img=47', 'https://linkedin.com/in/ayukartikasari', '+6281234500001',
   array['https://ayukartika.studio', 'https://linkedin.com/in/ayukartikasari/details/featured'],
   'Jakarta', 'ID', true, true),

  ('a1000000-0000-0000-0000-000000000002', true, 'Yoga Prasetyo', 'c1000000-0000-0000-0000-000000000002', 14,
   'Wrote the campaign lines people still quote back to BUBU years later. Freelances for agencies across Jakarta and Singapore, mostly on brand voice work.',
   'https://i.pravatar.cc/300?img=12', 'https://linkedin.com/in/yogaprasetyo', '+6281234500002',
   array['https://yogawrites.com', 'https://instagram.com/yoga.writes'],
   'Jakarta', 'ID', false, true),

  ('a1000000-0000-0000-0000-000000000003', true, 'Dinda Larasati', 'c1000000-0000-0000-0000-000000000003', 11,
   'Art-directed BUBU''s biggest pitch decks and campaign visuals for a decade. Runs a small design studio focused on identity systems.',
   'https://i.pravatar.cc/300?img=32', 'https://linkedin.com/in/dindalarasati', '+6281234500003',
   array['https://behance.net/dindalarasati', 'https://instagram.com/dinda.creates'],
   'Jakarta', 'ID', true, true),

  ('a1000000-0000-0000-0000-000000000004', true, 'Michael Tanuwijaya', 'c1000000-0000-0000-0000-000000000004', 8,
   'Built go-to-market plans for BUBU''s retail and FMCG clients. Now leads brand marketing at a regional consumer startup.',
   'https://i.pravatar.cc/300?img=13', 'https://linkedin.com/in/michaeltanuwijaya', '+6281234500004',
   array['https://linkedin.com/in/michaeltanuwijaya/details/featured'],
   'Singapore', 'SG', false, true),

  ('a1000000-0000-0000-0000-000000000005', true, 'Nadya Wijaya', 'c1000000-0000-0000-0000-000000000005', 5,
   'Handled media relations for BUBU''s launch events and crisis comms. Works in-house PR for a hospitality group.',
   'https://i.pravatar.cc/300?img=45', 'https://linkedin.com/in/nadyawijaya', '+6281234500005',
   array['https://linkedin.com/in/nadyawijaya/details/featured'],
   'Jakarta', 'ID', false, true),

  ('a1000000-0000-0000-0000-000000000006', true, 'Farhan Hidayat', 'c1000000-0000-0000-0000-000000000006', 10,
   'Managed BUBU''s key accounts through several years of client growth. Runs client operations for a martech company.',
   'https://i.pravatar.cc/300?img=14', 'https://linkedin.com/in/farhanhidayat', '+6281234500006',
   array['https://linkedin.com/in/farhanhidayat/details/featured'],
   'Jakarta', 'ID', false, false),

  ('a1000000-0000-0000-0000-000000000007', true, 'Salsabila Putri', 'c1000000-0000-0000-0000-000000000007', 4,
   'Ran consumer research for BUBU''s culture-first campaigns. Now a freelance insights consultant for early-stage brands.',
   'https://i.pravatar.cc/300?img=25', 'https://linkedin.com/in/salsabilaputri', '+6281234500007',
   array['https://salsabila-insights.com'],
   'Jakarta', 'ID', false, true),

  ('a1000000-0000-0000-0000-000000000008', true, 'Kevin Susanto', 'c1000000-0000-0000-0000-000000000008', 7,
   'Built and ran social strategy for several of BUBU''s youth-facing clients. Currently heads digital for a media company.',
   'https://i.pravatar.cc/300?img=15', 'https://linkedin.com/in/kevinsusanto', '+6281234500008',
   array['https://instagram.com/kevin.digital'],
   'Jakarta', 'ID', false, true),

  ('a1000000-0000-0000-0000-000000000009', true, 'Intan Permatasari', 'c1000000-0000-0000-0000-000000000009', 12,
   'Kept BUBU''s biggest activations running on time and on budget. Freelances as a production lead for events and shoots.',
   'https://i.pravatar.cc/300?img=48', 'https://linkedin.com/in/intanpermatasari', '+6281234500009',
   array['https://linkedin.com/in/intanpermatasari/details/featured'],
   'Jakarta', 'ID', false, false),

  ('a1000000-0000-0000-0000-000000000010', true, 'Aditya Rahman', 'c1000000-0000-0000-0000-000000000010', 9,
   'Closed several of BUBU''s longest client partnerships. Now does BD for a SEA-focused venture studio.',
   'https://i.pravatar.cc/300?img=17', 'https://linkedin.com/in/adityarahman', '+6281234500010',
   array['https://linkedin.com/in/adityarahman/details/featured'],
   'Singapore', 'SG', true, true),

  ('a1000000-0000-0000-0000-000000000011', true, 'Clara Angelina', 'c1000000-0000-0000-0000-000000000011', 6,
   'Ran finance operations for BUBU during a period of fast growth. Consults on financial ops for small agencies and studios.',
   'https://i.pravatar.cc/300?img=44', 'https://linkedin.com/in/claraangelina', '+6281234500011',
   array['https://linkedin.com/in/claraangelina/details/featured'],
   'Jakarta', 'ID', false, true),

  ('a1000000-0000-0000-0000-000000000012', true, 'Bagus Wirawan', 'c1000000-0000-0000-0000-000000000012', 5,
   'Built BUBU''s first internal reporting dashboards. Now a data engineer at a fintech startup.',
   'https://i.pravatar.cc/300?img=18', 'https://linkedin.com/in/baguswirawan', '+6281234500012',
   array['https://github.com/baguswirawan'],
   'Jakarta', 'ID', false, true),

  ('a1000000-0000-0000-0000-000000000013', true, 'Sarah Amelia Putri', 'c1000000-0000-0000-0000-000000000001', 3,
   'Started at BUBU straight out of university, working on planning for youth brands. Now a junior strategist at a regional agency.',
   'https://i.pravatar.cc/300?img=29', 'https://linkedin.com/in/sarahameliaputri', '+6281234500013',
   array['https://linkedin.com/in/sarahameliaputri/details/featured'],
   'Jakarta', 'ID', false, true),

  ('a1000000-0000-0000-0000-000000000014', true, 'Reza Pratama', 'c1000000-0000-0000-0000-000000000002', 6,
   'Wrote scripts and captions across BUBU''s social-first campaigns. Freelances as a copywriter for D2C brands.',
   'https://i.pravatar.cc/300?img=11', 'https://linkedin.com/in/rezapratama', '+6281234500014',
   array['https://instagram.com/reza.writes'],
   'Dubai', 'AE', false, true),

  ('a1000000-0000-0000-0000-000000000015', true, 'Budi Santoso', 'c1000000-0000-0000-0000-000000000001', 12,
   'Ran strategic planning for BUBU''s biggest retail pitches for over a decade. Now advises founders on brand positioning as an independent consultant.',
   'https://i.pravatar.cc/300?img=1', 'https://linkedin.com/in/budisantoso', '+6281234500015',
   array['https://linkedin.com/in/budisantoso/details/featured'],
   'Jakarta', 'ID', false, true),

  ('a1000000-0000-0000-0000-000000000016', true, 'Larasati Wibowo', 'c1000000-0000-0000-0000-000000000001', 7,
   'Built go-to-market roadmaps for BUBU''s F&B clients. Currently leads strategy at a fast-growing coffee chain.',
   'https://i.pravatar.cc/300?img=2', 'https://linkedin.com/in/larasatiwibowo', '+6281234500016',
   array['https://linkedin.com/in/larasatiwibowo/details/featured'],
   'Bandung', 'ID', false, true),

  ('a1000000-0000-0000-0000-000000000017', true, 'Christian Halim', 'c1000000-0000-0000-0000-000000000001', 5,
   'Handled category strategy for BUBU''s telco accounts. Moved into a strategy analyst role at a regional bank.',
   'https://i.pravatar.cc/300?img=3', 'https://linkedin.com/in/christianhalim', '+6281234500017',
   array['https://linkedin.com/in/christianhalim/details/featured'],
   'Jakarta', 'ID', false, true),

  ('a1000000-0000-0000-0000-000000000018', true, 'Nadia Puspita', 'c1000000-0000-0000-0000-000000000002', 8,
   'Led copy on BUBU''s most-awarded print campaigns. Now writes for a publishing house alongside client work.',
   'https://i.pravatar.cc/300?img=4', 'https://linkedin.com/in/nadiapuspita', '+6281234500018',
   array['https://instagram.com/nadia.writes'],
   'Jakarta', 'ID', false, true),

  ('a1000000-0000-0000-0000-000000000019', true, 'Arief Rahman Hakim', 'c1000000-0000-0000-0000-000000000002', 10,
   'Directed creative concepts for BUBU''s biggest FMCG launches. Runs a small creative collective back in Yogyakarta.',
   'https://i.pravatar.cc/300?img=5', 'https://linkedin.com/in/ariefrahmanhakim', '+6281234500019',
   array['https://behance.net/ariefrahman'],
   'Yogyakarta', 'ID', false, true),

  ('a1000000-0000-0000-0000-000000000020', true, 'Winona Sari', 'c1000000-0000-0000-0000-000000000002', 4,
   'Wrote social copy that carried several BUBU youth campaigns. Freelances for beauty and lifestyle brands.',
   'https://i.pravatar.cc/300?img=6', 'https://linkedin.com/in/winonasari', '+6281234500020',
   array['https://instagram.com/winona.writes'],
   'Jakarta', 'ID', false, true),

  ('a1000000-0000-0000-0000-000000000021', true, 'Galih Prakoso', 'c1000000-0000-0000-0000-000000000003', 9,
   'Art-directed motion and print for BUBU''s flagship activations. Now design lead at a creative studio.',
   'https://i.pravatar.cc/300?img=7', 'https://linkedin.com/in/galihprakoso', '+6281234500021',
   array['https://behance.net/galihprakoso'],
   'Jakarta', 'ID', false, true),

  ('a1000000-0000-0000-0000-000000000022', true, 'Amanda Kusuma', 'c1000000-0000-0000-0000-000000000003', 6,
   'Designed identity systems for several BUBU regional clients. Runs a branding studio out of Surabaya.',
   'https://i.pravatar.cc/300?img=8', 'https://linkedin.com/in/amandakusuma', '+6281234500022',
   array['https://behance.net/amandakusuma'],
   'Surabaya', 'ID', false, true),

  ('a1000000-0000-0000-0000-000000000023', true, 'Denny Firmansyah', 'c1000000-0000-0000-0000-000000000003', 13,
   'One of BUBU''s longest-serving art directors, across four agency eras. Now consults on brand visual systems.',
   'https://i.pravatar.cc/300?img=9', 'https://linkedin.com/in/dennyfirmansyah', '+6281234500023',
   array['https://linkedin.com/in/dennyfirmansyah/details/featured'],
   'Jakarta', 'ID', false, false),

  ('a1000000-0000-0000-0000-000000000024', true, 'Rani Puspitasari', 'c1000000-0000-0000-0000-000000000004', 7,
   'Built brand campaigns for BUBU''s beauty and personal-care clients. Now marketing lead at a D2C skincare brand.',
   'https://i.pravatar.cc/300?img=10', 'https://linkedin.com/in/ranipuspitasari', '+6281234500024',
   array['https://linkedin.com/in/ranipuspitasari/details/featured'],
   'Jakarta', 'ID', false, true),

  ('a1000000-0000-0000-0000-000000000025', true, 'Hendra Wijaya', 'c1000000-0000-0000-0000-000000000004', 11,
   'Led brand strategy across BUBU''s SEA client roster. Heads regional marketing for a consumer tech company.',
   'https://i.pravatar.cc/300?img=16', 'https://linkedin.com/in/hendrawijaya', '+6281234500025',
   array['https://linkedin.com/in/hendrawijaya/details/featured'],
   'Singapore', 'SG', true, true),

  ('a1000000-0000-0000-0000-000000000026', true, 'Cindy Lestari', 'c1000000-0000-0000-0000-000000000004', 5,
   'Managed brand campaigns for BUBU''s telco and fintech clients. Now a brand manager at a payments startup.',
   'https://i.pravatar.cc/300?img=19', 'https://linkedin.com/in/cindylestari', '+6281234500026',
   array['https://linkedin.com/in/cindylestari/details/featured'],
   'Jakarta', 'ID', false, true),

  ('a1000000-0000-0000-0000-000000000027', true, 'Fitriani Azzahra', 'c1000000-0000-0000-0000-000000000005', 6,
   'Ran press strategy for BUBU''s product launch events. In-house comms lead at a logistics company.',
   'https://i.pravatar.cc/300?img=20', 'https://linkedin.com/in/fitrianiazzahra', '+6281234500027',
   array['https://linkedin.com/in/fitrianiazzahra/details/featured'],
   'Jakarta', 'ID', false, true),

  ('a1000000-0000-0000-0000-000000000028', true, 'Bram Setiadi', 'c1000000-0000-0000-0000-000000000005', 9,
   'Handled crisis comms and media training for BUBU''s enterprise clients. Now runs a PR consultancy.',
   'https://i.pravatar.cc/300?img=21', 'https://linkedin.com/in/bramsetiadi', '+6281234500028',
   array['https://linkedin.com/in/bramsetiadi/details/featured'],
   'Jakarta', 'ID', false, true),

  ('a1000000-0000-0000-0000-000000000029', true, 'Olivia Tan', 'c1000000-0000-0000-0000-000000000005', 4,
   'Coordinated regional media outreach for BUBU''s cross-border campaigns. PR associate at a Malaysian media group.',
   'https://i.pravatar.cc/300?img=22', 'https://linkedin.com/in/oliviatan', '+6281234500029',
   array['https://linkedin.com/in/oliviatan/details/featured'],
   'Kuala Lumpur', 'MY', false, true),

  ('a1000000-0000-0000-0000-000000000030', true, 'Dewi Anggraini', 'c1000000-0000-0000-0000-000000000006', 8,
   'Managed BUBU''s largest retainer accounts through multiple renewal cycles. Client director at a martech agency.',
   'https://i.pravatar.cc/300?img=23', 'https://linkedin.com/in/dewianggraini', '+6281234500030',
   array['https://linkedin.com/in/dewianggraini/details/featured'],
   'Jakarta', 'ID', false, true),

  ('a1000000-0000-0000-0000-000000000031', true, 'Yusuf Maulana', 'c1000000-0000-0000-0000-000000000006', 10,
   'Led account strategy for BUBU''s banking and insurance clients. Now VP of client services at a regional agency.',
   'https://i.pravatar.cc/300?img=24', 'https://linkedin.com/in/yusufmaulana', '+6281234500031',
   array['https://linkedin.com/in/yusufmaulana/details/featured'],
   'Jakarta', 'ID', false, true),

  ('a1000000-0000-0000-0000-000000000032', true, 'Priska Handayani', 'c1000000-0000-0000-0000-000000000006', 5,
   'Handled day-to-day servicing for BUBU''s F&B roster. Account manager at a Bandung-based creative shop.',
   'https://i.pravatar.cc/300?img=26', 'https://linkedin.com/in/priskahandayani', '+6281234500032',
   array['https://linkedin.com/in/priskahandayani/details/featured'],
   'Bandung', 'ID', false, true),

  ('a1000000-0000-0000-0000-000000000033', true, 'Aditi Kusumawardhani', 'c1000000-0000-0000-0000-000000000007', 6,
   'Led qualitative research for BUBU''s culture-mapping projects. Now an insights lead at a research consultancy.',
   'https://i.pravatar.cc/300?img=27', 'https://linkedin.com/in/aditikusumawardhani', '+6281234500033',
   array['https://linkedin.com/in/aditikusumawardhani/details/featured'],
   'Jakarta', 'ID', false, true),

  ('a1000000-0000-0000-0000-000000000034', true, 'Robby Susanto', 'c1000000-0000-0000-0000-000000000007', 9,
   'Built BUBU''s first in-house consumer research panel. Runs research operations for a market intelligence firm.',
   'https://i.pravatar.cc/300?img=28', 'https://linkedin.com/in/robbysusanto', '+6281234500034',
   array['https://linkedin.com/in/robbysusanto/details/featured'],
   'Jakarta', 'ID', false, false),

  ('a1000000-0000-0000-0000-000000000035', true, 'Melati Anjani', 'c1000000-0000-0000-0000-000000000007', 3,
   'Ran ethnographic research for BUBU''s youth culture studies. Junior researcher at a university-affiliated lab.',
   'https://i.pravatar.cc/300?img=30', 'https://linkedin.com/in/melatianjani', '+6281234500035',
   array['https://linkedin.com/in/melatianjani/details/featured'],
   'Yogyakarta', 'ID', false, true),

  ('a1000000-0000-0000-0000-000000000036', true, 'Fadli Ramadhan', 'c1000000-0000-0000-0000-000000000008', 5,
   'Built paid social strategy for BUBU''s e-commerce clients. Performance marketing lead at a D2C brand.',
   'https://i.pravatar.cc/300?img=31', 'https://linkedin.com/in/fadliramadhan', '+6281234500036',
   array['https://linkedin.com/in/fadliramadhan/details/featured'],
   'Jakarta', 'ID', false, true),

  ('a1000000-0000-0000-0000-000000000037', true, 'Sabrina Wulandari', 'c1000000-0000-0000-0000-000000000008', 7,
   'Ran community management for BUBU''s biggest social accounts. Now social lead at a media company.',
   'https://i.pravatar.cc/300?img=33', 'https://linkedin.com/in/sabrinawulandari', '+6281234500037',
   array['https://instagram.com/sabrina.social'],
   'Jakarta', 'ID', false, true),

  ('a1000000-0000-0000-0000-000000000038', true, 'Teguh Iman Santoso', 'c1000000-0000-0000-0000-000000000008', 4,
   'Handled short-form video strategy for BUBU''s TikTok-first campaigns. Freelance content strategist.',
   'https://i.pravatar.cc/300?img=34', 'https://linkedin.com/in/teguhimansantoso', '+6281234500038',
   array['https://instagram.com/teguh.content'],
   'Surabaya', 'ID', false, true),

  ('a1000000-0000-0000-0000-000000000039', true, 'Wahyu Nugraha', 'c1000000-0000-0000-0000-000000000009', 11,
   'Produced BUBU''s largest brand activations end to end. Now runs production for a live-events company.',
   'https://i.pravatar.cc/300?img=35', 'https://linkedin.com/in/wahyunugraha', '+6281234500039',
   array['https://linkedin.com/in/wahyunugraha/details/featured'],
   'Jakarta', 'ID', true, true),

  ('a1000000-0000-0000-0000-000000000040', true, 'Retno Palupi', 'c1000000-0000-0000-0000-000000000009', 8,
   'Managed shoot logistics through BUBU''s biggest campaign years. Line producer for commercial productions.',
   'https://i.pravatar.cc/300?img=36', 'https://linkedin.com/in/retnopalupi', '+6281234500040',
   array['https://linkedin.com/in/retnopalupi/details/featured'],
   'Jakarta', 'ID', false, false),

  ('a1000000-0000-0000-0000-000000000041', true, 'Andra Saputra', 'c1000000-0000-0000-0000-000000000009', 6,
   'Kept BUBU''s event operations running across dozens of activations. Ops manager at an experiential agency.',
   'https://i.pravatar.cc/300?img=37', 'https://linkedin.com/in/andrasaputra', '+6281234500041',
   array['https://linkedin.com/in/andrasaputra/details/featured'],
   'Jakarta', 'ID', false, true),

  ('a1000000-0000-0000-0000-000000000042', true, 'Kirana Dewi', 'c1000000-0000-0000-0000-000000000010', 7,
   'Opened new BUBU client relationships across SEA markets. Now BD lead at a regional martech firm.',
   'https://i.pravatar.cc/300?img=38', 'https://linkedin.com/in/kiranadewi', '+6281234500042',
   array['https://linkedin.com/in/kiranadewi/details/featured'],
   'Singapore', 'SG', false, true),

  ('a1000000-0000-0000-0000-000000000043', true, 'Rizky Firmansyah', 'c1000000-0000-0000-0000-000000000010', 9,
   'Closed partnership deals for BUBU''s biggest brand collaborations. Partnerships manager at a media platform.',
   'https://i.pravatar.cc/300?img=39', 'https://linkedin.com/in/rizkyfirmansyah', '+6281234500043',
   array['https://linkedin.com/in/rizkyfirmansyah/details/featured'],
   'Jakarta', 'ID', false, true),

  ('a1000000-0000-0000-0000-000000000044', true, 'Hana Yulianti', 'c1000000-0000-0000-0000-000000000010', 5,
   'Built BUBU''s early presence in the Gulf market. Business development lead for a Dubai-based agency.',
   'https://i.pravatar.cc/300?img=40', 'https://linkedin.com/in/hanayulianti', '+6281234500044',
   array['https://linkedin.com/in/hanayulianti/details/featured'],
   'Dubai', 'AE', false, true),

  ('a1000000-0000-0000-0000-000000000045', true, 'Made Wirawan', 'c1000000-0000-0000-0000-000000000011', 10,
   'Managed finance operations through BUBU''s biggest growth years. Now finance director at a scaling startup.',
   'https://i.pravatar.cc/300?img=41', 'https://linkedin.com/in/madewirawan', '+6281234500045',
   array['https://linkedin.com/in/madewirawan/details/featured'],
   'Jakarta', 'ID', false, false),

  ('a1000000-0000-0000-0000-000000000046', true, 'Anisa Fitriyani', 'c1000000-0000-0000-0000-000000000011', 6,
   'Handled vendor and contract admin for BUBU''s client accounts. Operations finance lead at an agency network.',
   'https://i.pravatar.cc/300?img=42', 'https://linkedin.com/in/anisafitriyani', '+6281234500046',
   array['https://linkedin.com/in/anisafitriyani/details/featured'],
   'Jakarta', 'ID', false, true),

  ('a1000000-0000-0000-0000-000000000047', true, 'Bayu Kristanto', 'c1000000-0000-0000-0000-000000000011', 8,
   'Ran budgeting and reporting for BUBU''s largest retainers. Finance manager at a media holding company.',
   'https://i.pravatar.cc/300?img=43', 'https://linkedin.com/in/bayukristanto', '+6281234500047',
   array['https://linkedin.com/in/bayukristanto/details/featured'],
   'Jakarta', 'ID', false, true),

  ('a1000000-0000-0000-0000-000000000048', true, 'Cahyo Nugroho', 'c1000000-0000-0000-0000-000000000012', 7,
   'Built BUBU''s campaign-performance dashboards from scratch. Now a data analytics lead at a fintech.',
   'https://i.pravatar.cc/300?img=46', 'https://linkedin.com/in/cahyonugroho', '+6281234500048',
   array['https://github.com/cahyonugroho'],
   'Jakarta', 'ID', false, true),

  ('a1000000-0000-0000-0000-000000000049', true, 'Diva Ramadhani', 'c1000000-0000-0000-0000-000000000012', 4,
   'Maintained BUBU''s internal tools and data pipelines. Software engineer at an e-commerce company.',
   'https://i.pravatar.cc/300?img=49', 'https://linkedin.com/in/divaramadhani', '+6281234500049',
   array['https://github.com/divaramadhani'],
   'Jakarta', 'ID', false, true),

  ('a1000000-0000-0000-0000-000000000050', true, 'Ferdinand Simanjuntak', 'c1000000-0000-0000-0000-000000000012', 9,
   'Led BUBU''s first data-driven campaign measurement framework. Now CTO at an early-stage startup.',
   'https://i.pravatar.cc/300?img=50', 'https://linkedin.com/in/ferdinandsimanjuntak', '+6281234500050',
   array['https://github.com/ferdinandsimanjuntak'],
   'Jakarta', 'ID', false, false)
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

insert into public.testimonials
  (id, is_seed, quote, author_name, author_role, about_profile_id, sort_order)
values
  ('d1000000-0000-0000-0000-000000000001', true,
   'I posted looking for a co-founder on a Tuesday. By Friday I was on a call with Ayu, and a month later we''d scoped the first client project together. The directory did in a week what my old network hadn''t in a year.',
   'Rangga Wibisono', 'Founder, independent strategy practice', 'a1000000-0000-0000-0000-000000000001', 1),

  ('d1000000-0000-0000-0000-000000000002', true,
   'Two years out of BUBU and I was still guessing at my next move. Aditya spent an hour walking through how he built his own path into venture, no agenda, just useful. That''s the whole point of this network.',
   'Sarah Amelia Putri', 'Junior Strategist', 'a1000000-0000-0000-0000-000000000010', 2),

  ('d1000000-0000-0000-0000-000000000003', true,
   'Reza''s river-cleanup post landed in my feed and I signed up without thinking twice. Turned into three weekends, a short film, and a group chat that''s still active. Movements, not moments, exactly as advertised.',
   'Bella Anastasya', 'Freelance Photographer', 'a1000000-0000-0000-0000-000000000014', 3),

  ('d1000000-0000-0000-0000-000000000004', true,
   'We needed a rebrand fast and I didn''t want to gamble on an unknown studio. Dinda''s portfolio was right there on her profile, work I actually recognized from her BUBU days. Hired her within the week.',
   'Wisnu Adi Nugroho', 'Operations Lead, hospitality group', 'a1000000-0000-0000-0000-000000000003', 4),

  ('d1000000-0000-0000-0000-000000000005', true,
   'Most alumni directories are a glorified contact list. This one actually pushes you toward a conversation — the WhatsApp link on every profile means you talk to a person the same day, not three weeks later.',
   'Putri Handayani', 'Brand Consultant', null, 5),

  ('d1000000-0000-0000-0000-000000000006', true,
   'I found Kevin through the Digital & Social Media filter and messaged him about a campaign I was stuck on. He didn''t just answer, he sent over the actual deck he used at BUBU. That''s the alumni instinct this platform brings out.',
   'Fajar Setiawan', 'Marketing Manager', 'a1000000-0000-0000-0000-000000000008', 6),

  ('d1000000-0000-0000-0000-000000000007', true,
   'Salsabila''s investment post is exactly the kind of thing that never used to surface. Alumni building real things, quietly, until someone builds a place for it to be seen.',
   'Michael Tanuwijaya', 'Brand Marketing Lead', 'a1000000-0000-0000-0000-000000000007', 7),

  ('d1000000-0000-0000-0000-000000000008', true,
   'Farhan helped me untangle a client-ops mess in one call, purely because we''d both sat in the same BUBU standups years apart. There''s a shorthand ex-BUBU people have with each other that this platform finally has a home for.',
   'Devi Ratnasari', 'Client Services Manager', 'a1000000-0000-0000-0000-000000000006', 8)
on conflict (id) do nothing;
