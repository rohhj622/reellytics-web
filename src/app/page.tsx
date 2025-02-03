import Login from "@/components/Login";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import 'github-markdown-css/github-markdown.css';
import fetchWithToken from '@/utils/fetchWithToken';
import { getServerSession } from 'next-auth';
import {
	NextAuthSession,
	authOptions,
} from '@/app/api/auth/[...nextauth]/route';

import 'github-markdown-css/github-markdown.css';

export default async function Home() {

  const token = await fetchWithToken(
      'http://localhost:3000/api/auth/introspect',
  );

  const session = (await getServerSession(
      authOptions,
  )) as NextAuthSession | null;

  const analyze = async () => {
    console.log('hi')
    const req_url = `https://api.reelstatics.com/api/v1/reelstatics/analyze`;
    // const req_url = `http://localhost:8000/api/v1/reelstatics/analyze`;

    const payload = {
      followers: 12, // 팔로워 수
      elapsed_time: 120, // 영상 게시 후 경과 분
      video_length: 10, // 비디오 길이
      avg_watch_time: 1, // 평균 시청 시간
      views: 35, // views
      likes: 5, // 좋아요 수 
      comments: 0, // 댓글 수
      shares: 0, // 공유
      saves: 0, // 저장
      follows: 2 // 추가된 팔로워 수
    };

    // Fetch options
    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${session === null ? '' : session?.accessToken}`
      },
      body: JSON.stringify(payload),
    };

    const res = await fetch(req_url, options);
    console.log(res)
    const data = await res.json();
    return data;
  }
  // const datatest = await analyze();

  const updateTitle = async () => {
    // const req_url = `https://api.reelstatics.com/api/v1/reelstatics/analyze`;
    const req_url = `http://localhost:8000/api/v1/reelstatics/history/24`;

    const payload = {
      title: '타이틀변경1'
    };

    // Fetch options
    const options = {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${session === null ? '' : session?.accessToken}`
      },
      body: JSON.stringify(payload),
    };

    const res = await fetch(req_url, options);
    console.log(res)
    const data = await res.json();
    return data;
  }
  // const datatest = await updateTitle();

  const histories = async () => {
    console.log('hi')
    const req_url = `https://api.reelstatics.com/api/v1/reelstatics/history`;
    // const req_url = `http://localhost:8000/api/v1/reelstatics/history/24`;

    const payload = {
      followers: 12, // 팔로워 수
      elapsed_time: 120, // 영상 게시 후 경과 분
      video_length: 10, // 비디오 길이
      avg_watch_time: 1, // 평균 시청 시간
      views: 35, // views
      likes: 5, // 좋아요 수 
      comments: 0, // 댓글 수
      shares: 0, // 공유
      saves: 0, // 저장
      follows: 2 // 추가된 팔로워 수
    };
    console.log(session?.accessToken)
    // Fetch options
    const options = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${session === null ? '' : session?.accessToken}`
      },
      // body: JSON.stringify(payload),
    };

    const res = await fetch(req_url, options);
    const data = await res.json();
    console.log(data)
    return data;
  }

  // const datatest = await histories();
  const historyContents = async () => {
    console.log('hi')
    const req_url = `https://api.reelstatics.com/api/v1/reelstatics/history/11`;
    // const req_url = `http://localhost:8000/api/v1/reelstatics/history/19`;

    // Fetch options
    const options = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${session === null ? '' : session?.accessToken}`
      },
      // body: JSON.stringify(payload),
    };

    const res = await fetch(req_url, options);
    const data = await res.json();
    console.log(data)
    return data;
  }
  const datatest = await historyContents();

  // const datatest = {
  //   "status": 200,
  //   "result": "1. **신규 데이터 분석 결과**\n   - 팔로워 수: 12\n   - 게시 후 경과 분: 120\n   - 영상 길이: 10 초\n   - 평균 시청 유지 시간: 1 초\n   - 조회수: 35\n   - 좋아요: 5\n   - 댓글: 0\n   - 공유: 0\n   - 저장: 0\n   - 팔로우 전환: 2\n\n   **분석 결과와 강점/약점**\n   - **강점**: 영상이 게시된 후 2시간 동안 모든 팔로워가 적어도 1회는 영상을 시청하였고 팔로워 전환수가 두 명으로 비교적 높습니다.\n   - **약점**: 평균 시청 유지 시간이 매우 짧아서 (식계 영상 길이의 10%) 영상의 재미나 흡인력이 떨어질 수 있습니다. 또한 댓글, 공유, 저장은 전혀 없어 사용자의 참여율이 매우 저조합니다.\n\n2. **기존 데이터와 비교 결과**\n   - 기존 데이터가 없어 비교가 불가합니다. 기존 데이터와의 비교를 위해 이전 데이터가 필요합니다.\n\n3. **누적 평가**\n   - 총 조회수: 35\n   - 총 좋아요: 5\n   - 총 댓글: 0\n   - 총 공유: 0\n   - 총 저장: 0\n   - 총 팔로우 전환: 2\n\n   - **트렌드**: 현재 데이터만으로는 트렌드 분석이 제한적이나, 짧은 시청 유지 시간과 낮은 사용자 참여율이 관찰됩니다.\n   - **추천 개선사항**: \n     - 영상 내용의 개선을 통해 사용자의 시청 시간을 증가시키고 참여율을 높일 필요가 있습니다. 끌리는 훅(hook)을 영상 초반에 배치하여 관심을 유도해주세요.\n     - 인터랙티브한 요소(예: 질문, 투표)를 도입해 댓글 및 공유를 촉진하고 저장 기능을 활용하도록 유도하는 전략이 필요합니다.\n\n"
  // };
  // const datatest = await analyze();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div>
        <Login />
        <div>
          <h1>Decode Token</h1>
          {
            token === undefined?
            <p>Loading...</p>
            :
            <pre>{JSON.stringify(token, null, 2)}</pre>
          }
        </div>
        <h1>reelstatics</h1>
        {
          datatest === undefined?
          <p>Loading...</p>
          :
          <div className="markdown-body">
            {/* <ReactMarkdown>{datatest}</ReactMarkdown> */}
            <pre>{JSON.stringify(datatest, null, 2)}</pre>
            {/* <ReactMarkdown>{datatest.result}</ReactMarkdown> */}
          </div>
        }
      </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}

