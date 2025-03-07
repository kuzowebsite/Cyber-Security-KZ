import { NextResponse } from "next/server"
import type { NewsItem } from "@/components/news-fetcher"

// This would be replaced with actual web scraping or API calls
// to the Mongolian news sites in a production environment
export async function GET() {
  try {
    // In a real implementation, you would:
    // 1. Fetch from gogo.mn, ikon.mn, news.mn APIs or scrape their content
    // 2. Parse the responses
    // 3. Format them into NewsItem objects

    // For demo purposes, we're returning sample data
    const news: NewsItem[] = [
      {
        title: "iPhone 16е загварын урьдчилсан захиалга II/21-нээс эхэлнэ",
        source: "gogo.mn",
        url: "https://gogo.mn/r/6876",
        category: "Технологи",
      },
      {
        title: "Сайн, гэхдээ жангалтгүй - Nvidia-ийн IV улирлын тайлан",
        source: "gogo.mn",
        url: "https://gogo.mn/r/6875",
        category: "Технологи",
      },
      {
        title: "Хүний нүүц мэдээлэл хадгалдаг байгууллагууд эрсдэлийн үнэлгээ буруу хийлээ шаардлагатай",
        source: "gogo.mn",
        url: "https://gogo.mn/r/6874",
        category: "Кибер аюулгүй байдал",
      },
      {
        title: "APPLE КОМПАНИ УДААН ХҮЛЭЭЛГЭСЭН ХЯМД ҮНЭТЭЙ IPHONE 16E ЗАГВАРЫГ ТАНИЛЦУУЛЛАА",
        source: "ikon.mn",
        url: "https://ikon.mn/n/2zw9",
        category: "Технологи",
      },
      {
        title: "МЕТА КОМПАНИ ДЭЛХИЙГ ХЭРСЭН ХАМГИЙН УРТ КАБЕЛИЙН СҮЛЖЭЭГ ДАЛАЙН УСАН ДООГУУР БАЙГУУЛАХ ТӨСӨЛ ЗАРЛАЛАА",
        source: "ikon.mn",
        url: "https://ikon.mn/n/2zw8",
        category: "Технологи",
      },
      {
        title: 'Илон Маск "Дэлхийн хамгийн ухаалаг AI" гэх тодотголтой "Grok-3" чатботоо танилцуулав',
        source: "gogo.mn",
        url: "https://gogo.mn/r/6873",
        category: "Технологи",
      },
      {
        title: "Шинжээчийн ажлыг хийгээд олууулаар орлуулсан хөдөж сэн өгөөжөөрөө зах зээлд хол илүүрхжээ",
        source: "gogo.mn",
        url: "https://gogo.mn/r/6872",
        category: "Технологи",
      },
      {
        title: "The MongolZ ESL Pro League-ийн эхний тоглолтдоо 2-0 харьцаагаар хожлоо",
        source: "gogo.mn",
        url: "https://gogo.mn/r/6871",
        category: "Технологи",
      },
    ]

    return NextResponse.json(news)
  } catch (error) {
    console.error("Error fetching news:", error)
    return NextResponse.json({ error: "Failed to fetch news" }, { status: 500 })
  }
}

