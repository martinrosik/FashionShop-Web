import { useState, useEffect } from "react";

export const useAppState = () => {
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const [selectedColor, setSelectedColor] = useState<string>("black");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return {
    currentPage,
    setCurrentPage,
    isMenuOpen,
    setIsMenuOpen,
    scrolled,
    currentSlide,
    setCurrentSlide,
    searchQuery,
    setSearchQuery,
    showSearch,
    setShowSearch,
    selectedSize,
    setSelectedSize,
    selectedColor,
    setSelectedColor,
    openFaq,
    setOpenFaq,
  };
};
