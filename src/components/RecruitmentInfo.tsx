import { Badge } from './ui/badge';
import { CheckCircle2, Circle } from 'lucide-react';

interface RecruitmentPosition {
  position: string;
  level: string;
  count: number;
  current: number;
}

interface RecruitmentInfoProps {
  recruitment: RecruitmentPosition[];
}

export function RecruitmentInfo({ recruitment }: RecruitmentInfoProps) {
  return (
    <div className="py-8 border-b">
      <h2 className="text-gray-900 mb-6">모집 인원</h2>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {recruitment.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-gray-900 mb-1">{item.position}</h3>
                <Badge variant="secondary" className="text-xs">
                  {item.level}
                </Badge>
              </div>
              {item.current >= item.count ? (
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              ) : (
                <Circle className="w-5 h-5 text-gray-400" />
              )}
            </div>
            
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">모집</span>
              <span className="text-gray-900">
                <span className={item.current >= item.count ? 'text-green-600' : 'text-blue-600'}>
                  {item.current}
                </span>
                /{item.count}명
              </span>
            </div>
            
            <div className="mt-3 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all ${
                  item.current >= item.count ? 'bg-green-600' : 'bg-blue-600'
                }`}
                style={{ width: `${Math.min((item.current / item.count) * 100, 100)}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
