export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function isValidUrl(value: string): boolean {
  if (!value.trim()) return true; // optional fields are allowed to be empty
  try {
    const url = new URL(value.trim());
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

export type ProfileFormValues = {
  full_name: string;
  expertise_category_id: string;
  years_experience: string;
  bio: string;
  avatar_url: string;
  linkedin_url: string;
  whatsapp_number: string;
  portfolio_links: string[];
};

export function validateProfile(values: ProfileFormValues): Record<string, string> {
  const errors: Record<string, string> = {};

  if (!values.full_name.trim()) errors.full_name = "Enter your full name.";
  if (!values.expertise_category_id) errors.expertise_category_id = "Choose an expertise category.";

  const years = Number(values.years_experience);
  if (values.years_experience === "" || Number.isNaN(years) || years < 0 || years > 60) {
    errors.years_experience = "Enter years of experience between 0 and 60.";
  }

  if (values.avatar_url && !isValidUrl(values.avatar_url)) {
    errors.avatar_url = "Enter a valid photo URL.";
  }
  if (values.linkedin_url && !isValidUrl(values.linkedin_url)) {
    errors.linkedin_url = "Enter a valid LinkedIn URL.";
  }
  for (const link of values.portfolio_links) {
    if (link && !isValidUrl(link)) {
      errors.portfolio_links = "One of your portfolio links isn't a valid URL.";
      break;
    }
  }

  return errors;
}

export type OpportunityFormValues = {
  title: string;
  category: string;
  description: string;
  looking_for: string;
};

export function validateOpportunity(values: OpportunityFormValues): Record<string, string> {
  const errors: Record<string, string> = {};
  if (!values.title.trim()) errors.title = "Give this opportunity a title.";
  if (!values.category) errors.category = "Choose a category.";
  if (!values.description.trim()) errors.description = "Add a short description.";
  return errors;
}

// Formats an Indonesian-style phone number for a wa.me deep link:
// strips everything but digits, and turns a leading 0 into the 62 prefix.
export function toWhatsAppLink(rawNumber: string): string | null {
  const digits = rawNumber.replace(/[^\d]/g, "");
  if (!digits) return null;
  const normalized = digits.startsWith("0") ? `62${digits.slice(1)}` : digits;
  return `https://wa.me/${normalized}`;
}
