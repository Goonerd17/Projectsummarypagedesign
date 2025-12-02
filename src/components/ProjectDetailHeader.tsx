import { Badge } from './ui/badge';
import { Eye } from 'lucide-react';

interface ProjectDetailHeaderProps {
  status: string;
  isAdditionalRecruiting: boolean;
  summary: string;
  title: string;
  author: {
    name: string;
    website: string;
    views: string;
  };
}

export function ProjectDetailHeader({
  status,
  isAdditionalRecruiting,
  summary,
  title,
  author,
}: ProjectDetailHeaderProps) {
  return (
    <div className="border-b px-6 md:px-10 py-8">
      {/* Status badges */}
      <div className="flex items-center gap-2 mb-4">
        <Badge variant="default" className="bg-blue-600 hover:bg-blue-700">
          {status}
        </Badge>
        {isAdditionalRecruiting && (
          <Badge variant="outline" className="border-blue-600 text-blue-600">
            추가모집
          </Badge>
        )}
      </div>

      {/* Summary and Title */}
      <div className="mb-6">
        <h1 className="text-gray-900">
          <span className="text-blue-600">{summary}</span> {title}
        </h1>
      </div>

      {/* Author info */}
      <div className="flex items-center gap-4 text-gray-600">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white">
            {author.name.charAt(0)}
          </div>
          <span>{author.name}</span>
        </div>
        <span className="text-gray-400">|</span>
        <span className="text-sm">{author.website}</span>
        <span className="text-gray-400">|</span>
        <div className="flex items-center gap-1 text-sm">
          <Eye className="w-4 h-4" />
          <span>{author.views}</span>
        </div>
      </div>
    </div>
  );
}
