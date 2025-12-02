import { useState, useEffect } from 'react';
import { Heart, FileText, Share2, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';

interface FloatingActionBarProps {
  isLiked: boolean;
  likeCount: number;
  onLike: () => void;
  onApply: () => void;
  onShare: () => void;
  onScrollToTop: () => void;
}

export function FloatingActionBar({
  isLiked,
  likeCount,
  onLike,
  onApply,
  onShare,
  onScrollToTop,
}: FloatingActionBarProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <TooltipProvider>
      <div className="fixed right-6 bottom-6 flex flex-col gap-3 z-50">
        {/* Like button */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="w-14 h-14 rounded-full shadow-lg bg-white hover:bg-gray-50 flex flex-col items-center justify-center gap-0.5"
              onClick={onLike}
            >
              <Heart
                className={`w-5 h-5 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
              />
              <span className="text-xs text-gray-600">{likeCount}</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>좋아요</p>
          </TooltipContent>
        </Tooltip>

        {/* Apply button */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              className="w-14 h-14 rounded-full shadow-lg bg-blue-600 hover:bg-blue-700"
              onClick={onApply}
            >
              <FileText className="w-5 h-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>지원하기</p>
          </TooltipContent>
        </Tooltip>

        {/* Share button */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="w-14 h-14 rounded-full shadow-lg bg-white hover:bg-gray-50"
              onClick={onShare}
            >
              <Share2 className="w-5 h-5 text-gray-600" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>공유하기</p>
          </TooltipContent>
        </Tooltip>

        {/* Scroll to top button */}
        {showScrollTop && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="w-14 h-14 rounded-full shadow-lg bg-white hover:bg-gray-50"
                onClick={onScrollToTop}
              >
                <ArrowUp className="w-5 h-5 text-gray-600" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>맨 위로</p>
            </TooltipContent>
          </Tooltip>
        )}
      </div>
    </TooltipProvider>
  );
}
