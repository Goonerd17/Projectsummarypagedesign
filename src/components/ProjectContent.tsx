interface ProjectContentProps {
  content: string;
}

export function ProjectContent({ content }: ProjectContentProps) {
  return (
    <div className="py-8">
      <h2 className="text-gray-900 mb-6">프로젝트 상세</h2>
      
      <div className="prose max-w-none">
        <div className="text-gray-700 whitespace-pre-wrap leading-relaxed">
          {content}
        </div>
      </div>
    </div>
  );
}
