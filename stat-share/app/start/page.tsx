"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function Start() {
  const router = useRouter();

  const getStart = () => {
    router.push('/');
  }

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center gap-4">
        <Input placeholder="팀명" />
        <Input type="number" placeholder="인원수" />
        <Button onClick={getStart}>홈으로 이동</Button>
      </div>
    </div>
  );
}
