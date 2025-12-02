import { useState } from 'react';
import { ProjectDetailHeader } from './components/ProjectDetailHeader';
import { ProjectOverview } from './components/ProjectOverview';
import { RecruitmentInfo } from './components/RecruitmentInfo';
import { ProjectContent } from './components/ProjectContent';
import { FloatingActionBar } from './components/FloatingActionBar';
import { ShareDialog } from './components/ShareDialog';

// Mock data
const projectData = {
  status: '모집상태',
  isAdditionalRecruiting: true,
  summary: '[신규모집]',
  title: '프로젝트 제목 영역입니다. 프로젝트 제목 영역입니다. 프로젝트 제목 영역입니다.',
  author: {
    name: '사용자 닉네임',
    website: 'YYYY.MM.DD(등록일)',
    views: '조회수 100+'
  },
  overview: {
    schedule: {
      recruitment: {
        start: 'YYYY.MM.DD',
        end: 'YYYY.MM.DD'
      },
      duration: {
        start: 'YYYY.MM.DD',
        end: 'YYYY.MM.DD'
      }
    },
    method: '온/오프라인',
    positions: [
      '기획자(1)',
      '디자이너(1)',
      '프론트엔드(1)',
      '프론트엔드(개발)',
      '백엔드(1/2명(선)',
    ],
    skills: ['React', 'TypeScript', 'Node.js', 'Figma'],
    contact: '오픈채팅 방 링크 1'
  },
  recruitment: [
    { position: '기획자', level: '주니어', count: 1, current: 0 },
    { position: '디자이너', level: '미들', count: 2, current: 1 },
    { position: '프론트엔드', level: '시니어', count: 1, current: 1 },
    { position: '백엔드', level: '주니어', count: 2, current: 0 },
  ],
  content: `프로젝트에 대한 상세한 설명이 들어갑니다.

이 곳에는 프로젝트의 목표, 진행 방식, 기대 효과 등을 자유롭게 작성할 수 있습니다.

주요 내용:
- 프로젝트 배경 및 목적
- 기술 스택 및 개발 환경
- 팀 구성 및 역할 분담
- 진행 일정 및 마일스톤
- 기대 효과 및 성과

함께 성장하며 좋은 결과를 만들어갈 팀원을 기다립니다!`
};

function App() {
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(42);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(prev => prev - 1);
    } else {
      setLikeCount(prev => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleApply = () => {
    alert('지원하기 기능이 실행됩니다.');
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm">
          <ProjectDetailHeader
            status={projectData.status}
            isAdditionalRecruiting={projectData.isAdditionalRecruiting}
            summary={projectData.summary}
            title={projectData.title}
            author={projectData.author}
          />

          <div className="px-6 md:px-10 pb-10">
            <ProjectOverview overview={projectData.overview} />
            
            <RecruitmentInfo recruitment={projectData.recruitment} />
            
            <ProjectContent content={projectData.content} />
          </div>
        </div>
      </div>

      <FloatingActionBar
        isLiked={isLiked}
        likeCount={likeCount}
        onLike={handleLike}
        onApply={handleApply}
        onShare={() => setIsShareDialogOpen(true)}
        onScrollToTop={handleScrollToTop}
      />

      <ShareDialog
        isOpen={isShareDialogOpen}
        onClose={() => setIsShareDialogOpen(false)}
      />
    </div>
  );
}

export default App;
