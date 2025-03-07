import { Badge } from "@/components/ui/badge"
import { Trophy, Shield, Star, Award, CheckCircle2 } from 'lucide-react'

interface HackerEntry {
  name: string
  period: string
  description: string
  achievements: string[]
  type: "White Hat" | "Grey Hat" | "Black Hat" | "Hacktivist"
  verified?: boolean
}

const hackers: HackerEntry[] = [
  {
    name: "Kevin Mitnick",
    period: "1963-2023",
    description: "Нэгэн цагт дэлхийн хамгийн эрэн сурвалжлагдаж байсан хакер. Одоо кибер аюулгүй байдлын зөвлөх.",
    achievements: [
      "FBI-н Most Wanted жагсаалтад орж байсан",
      "Sun, Nokia компаниудын системийг нэвтэлсэн",
      "Mitnick Security компанийг үүсгэн байгуулагч",
    ],
    type: "White Hat",
    verified: true
  },
  {
    name: "Anonymous",
    period: "2003-өнөөг хүртэл",
    description: "Олон улсын хакер бүлэглэл. Улс төр, нийгмийн шударга бусын төлөө тэмцдэг.",
    achievements: [
      "ISIS-н эсрэг кибер дайн зарласан",
      "Засгийн газруудын нууц мэдээллийг задруулсан",
      "Church of Scientology-н эсрэг Project Chanology",
    ],
    type: "Hacktivist"
  },
  {
    name: "Gary McKinnon",
    period: "2001-2002",
    description: "NASA болон АНУ-ын цэргийн компьютерт нэвтэрч, НЛО-ны нотолгоо хайсан хакер.",
    achievements: [
      "97 цэргийн болон NASA-гийн компьютерт нэвтэрсэн",
      "Хамгийн том цэргийн кибер халдлага гэж нэрлэгдсэн",
      "700,000 долларын хохирол учруулсан",
    ],
    type: "Grey Hat"
  }
]

export function HackerTimeline() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-white">Нийт зочид</h3>
          <p className="text-sm text-slate-400">Сайт нээгдсэнээс хойш</p>
          <div className="text-3xl font-bold text-white mt-1">5,484</div>
        </div>
        <div className="flex gap-2">
          <Badge variant="outline" className="border-green-500/20 text-green-400">
            <Trophy className="w-3 h-3 mr-1" />
            81 хэрэглэгч одоо онлайн байна
          </Badge>
        </div>
      </div>

      <div className="space-y-4">
        {hackers.map((hacker, index) => (
          <div
            key={index}
            className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50 hover:bg-slate-800/80 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-lg font-semibold text-white">{hacker.name}</h4>
                  {hacker.verified && (
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  )}
                  <Badge
                    variant="outline"
                    className={`
                      ${hacker.type === "White Hat" && "border-green-500/20 text-green-400"}
                      ${hacker.type === "Grey Hat" && "border-yellow-500/20 text-yellow-400"}
                      ${hacker.type === "Black Hat" && "border-red-500/20 text-red-400"}
                      ${hacker.type === "Hacktivist" && "border-purple-500/20 text-purple-400"}
                    `}
                  >
                    {hacker.type}
                  </Badge>
                </div>
                <p className="text-sm text-slate-400 mt-1">{hacker.period}</p>
                <p className="text-sm text-slate-300 mt-2">{hacker.description}</p>
                
                <div className="mt-3 space-y-1">
                  {hacker.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-400">
                      <Star className="w-3 h-3 text-amber-400" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
