export interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 1,
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business.",
    author: "John Smith",
    role: "Marketing Director at XYZ Corp",
  },
  {
    id: 2,
    text: "The expertise and dedication shown by the Positivus team have been instrumental in our digital growth. Their strategy for SEO and content marketing is top-notch and highly effective.",
    author: "Jane Doe",
    role: "COO at TechInnovate",
  },
  {
    id: 3,
    text: "I highly recommend Positivus to any company looking to grow their online presence. They don't just deliver results; they provide insights that help us understand our market better.",
    author: "Michael Brown",
    role: "Founder of GreenScape",
  },
  {
    id: 4,
    text: "Working with this agency has been a game-changer for our lead generation. Their PPC management is data-driven and the communication is always clear and timely.",
    author: "Sarah Jenkins",
    role: "Head of Growth at FinLeads",
  }
];