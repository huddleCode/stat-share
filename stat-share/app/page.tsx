"use client";

import { Button } from "@/components/ui/button";
import { DefaultRadarChart } from "@/components/ui/raderChart";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()

  const getStart = () => {
    router.push('/start')
  }

  const searchTeam = () => {
    router.push('/search')
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col items-center gap-4">
        <p className="text-3xl font-bold">재미로 보는 스탯!!!</p>
        <DefaultRadarChart />
        <Button onClick={getStart}>스텟 생성</Button>
        <Button onClick={searchTeam}>팀 검색</Button>
      </div>
    </div>
  );
}
