interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  role: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    avatar: "https://i.pravatar.cc/150?u=sarahj",
    role: "Verified Customer",
    content: "I've bought several watches from Fries Bag, and the quality is consistently outstanding. Their customer service is exceptional, and shipping is always fast and secure. Highly recommend!",
    rating: 5
  },
  {
    id: "2",
    name: "Michael Thompson",
    avatar: "https://i.pravatar.cc/150?u=michaelt",
    role: "Watch Collector",
    content: "As a watch enthusiast, I'm extremely particular about where I shop. Fries Bag has exceeded my expectations with their attention to detail and authentication process. The Celestial Chronograph I purchased is simply stunning.",
    rating: 5
  },
  {
    id: "3",
    name: "Jessica Reynolds",
    avatar: "https://i.pravatar.cc/150?u=jessicar",
    role: "Fashion Blogger",
    content: "The Cosmic Runners are not only stylish but incredibly comfortable. I've received countless compliments and questions about where I got them. The space-themed website is also visually appealing and easy to navigate.",
    rating: 4
  },
  {
    id: "4",
    name: "David Chen",
    avatar: "https://i.pravatar.cc/150?u=davidc",
    role: "Verified Customer",
    content: "I was initially hesitant about ordering the Nova Puffer Jacket online, but the detailed size guide was very helpful. The jacket arrived exactly as described and has become my favorite winter piece. The quality is exceptional.",
    rating: 5
  },
  {
    id: "5",
    name: "Alicia Rodriguez",
    avatar: "https://i.pravatar.cc/150?u=aliciar",
    role: "Influencer",
    content: "Fries Bag has been my go-to for luxury accessories. Their attention to detail and quality control is impressive. The Fries Chain Necklace I purchased looks even better in person than it did online.",
    rating: 5
  },
  {
    id: "6",
    name: "Robert Wilson",
    avatar: "https://i.pravatar.cc/150?u=robertw",
    role: "Entrepreneur",
    content: "The Eclipse Technical Jacket is an engineering marvel. Perfect for my business trips and weekend adventures. The customer service team was also incredibly helpful when I had questions about the features.",
    rating: 4
  }
];