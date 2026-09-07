export type ExpertiseCategory = {
  id: string;
  slug: string;
  label: string;
  sort_order: number;
};

export type Profile = {
  id: string;
  user_id: string | null;
  is_seed: boolean;
  full_name: string;
  expertise_category_id: string;
  years_experience: number;
  bio: string | null;
  avatar_url: string | null;
  linkedin_url: string | null;
  whatsapp_number: string | null;
  portfolio_links: string[];
  city: string | null;
  country_code: string | null;
  is_featured: boolean;
  is_open_to_collaborate: boolean;
  is_published: boolean;
  created_at: string;
  updated_at: string;
};

export type ProfileWithCategory = Profile & {
  expertise_categories: Pick<ExpertiseCategory, "id" | "slug" | "label"> | null;
};

export type Testimonial = {
  id: string;
  is_seed: boolean;
  quote: string;
  author_name: string;
  author_role: string | null;
  about_profile_id: string | null;
  sort_order: number;
  created_at: string;
};

export type TestimonialWithProfile = Testimonial & {
  profiles: Pick<Profile, "id" | "full_name" | "avatar_url"> | null;
};

export type OpportunityCategory =
  | "collaboration"
  | "investment"
  | "social_project"
  | "freelance"
  | "mentorship"
  | "event_speaking";

export type OpportunityStatus = "open" | "closed";

export type Opportunity = {
  id: string;
  posted_by_profile_id: string;
  is_seed: boolean;
  title: string;
  category: OpportunityCategory;
  description: string;
  looking_for: string | null;
  status: OpportunityStatus;
  is_published: boolean;
  created_at: string;
  updated_at: string;
};

export type OpportunityWithProfile = Opportunity & {
  profiles: Pick<
    Profile,
    "id" | "full_name" | "avatar_url" | "linkedin_url" | "whatsapp_number"
  > | null;
};
