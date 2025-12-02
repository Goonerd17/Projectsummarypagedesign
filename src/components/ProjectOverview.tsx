import { Calendar, MapPin, Users, Wrench, MessageSquare } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';
import { Badge } from './ui/badge';

interface ProjectOverviewProps {
  overview: {
    schedule: {
      recruitment: { start: string; end: string };
      duration: { start: string; end: string };
    };
    method: string;
    positions: string[];
    skills: string[];
    contact: string;
  };
}

export function ProjectOverview({ overview }: ProjectOverviewProps) {
  return (
    <div className="py-8 border-b">
      <h2 className="text-gray-900 mb-6">프로젝트 개요</h2>
      
      <div className="grid gap-6">
        {/* Schedule */}
        <div className="grid md:grid-cols-2 gap-6">
          <InfoItem
            icon={<Calendar className="w-5 h-5" />}
            label="모집기간"
            value={`${overview.schedule.recruitment.start} ~ ${overview.schedule.recruitment.end}`}
          />
          <InfoItem
            icon={<Calendar className="w-5 h-5" />}
            label="프로젝트 기간"
            value={`${overview.schedule.duration.start} ~ ${overview.schedule.duration.end}`}
          />
        </div>

        {/* Method */}
        <InfoItem
          icon={<MapPin className="w-5 h-5" />}
          label="진행방식"
          value={overview.method}
        />

        {/* Positions */}
        <div className="flex gap-3">
          <div className="flex items-start gap-2 text-gray-600 min-w-[120px] pt-1">
            <Users className="w-5 h-5 flex-shrink-0" />
            <span>모집포지션</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {overview.positions.map((position, index) => (
              <Badge key={index} variant="secondary" className="bg-gray-100">
                {position}
              </Badge>
            ))}
          </div>
        </div>

        {/* Skills with tooltip */}
        <div className="flex gap-3">
          <div className="flex items-start gap-2 text-gray-600 min-w-[120px] pt-1">
            <Wrench className="w-5 h-5 flex-shrink-0" />
            <span>사용기술</span>
          </div>
          <TooltipProvider>
            <div className="flex flex-wrap gap-2">
              {overview.skills.map((skill, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <Badge 
                      variant="outline" 
                      className="border-blue-500 text-blue-700 bg-blue-50 hover:bg-blue-100 cursor-help"
                    >
                      {skill}
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{skill} 기술을 사용합니다</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>
        </div>

        {/* Contact */}
        <InfoItem
          icon={<MessageSquare className="w-5 h-5" />}
          label="연락방법"
          value={overview.contact}
        />
      </div>
    </div>
  );
}

function InfoItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex gap-3">
      <div className="flex items-center gap-2 text-gray-600 min-w-[120px]">
        {icon}
        <span>{label}</span>
      </div>
      <div className="text-gray-900">{value}</div>
    </div>
  );
}
