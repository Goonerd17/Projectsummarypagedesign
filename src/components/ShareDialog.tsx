import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface ShareDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ShareDialog({ isOpen, onClose }: ShareDialogProps) {
  const [copied, setCopied] = useState(false);
  const shareUrl = window.location.href;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>프로젝트 공유하기</DialogTitle>
          <DialogDescription>
            링크를 복사하여 프로젝트를 공유하세요
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-2 mt-4">
          <Input
            value={shareUrl}
            readOnly
            className="flex-1"
          />
          <Button
            size="icon"
            onClick={handleCopy}
            className={copied ? 'bg-green-600 hover:bg-green-700' : ''}
          >
            {copied ? (
              <Check className="w-4 h-4" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </Button>
        </div>
        {copied && (
          <p className="text-sm text-green-600 text-center">
            링크가 복사되었습니다!
          </p>
        )}
      </DialogContent>
    </Dialog>
  );
}
