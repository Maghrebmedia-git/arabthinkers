"use client";

import Image from "next/image";
import { forwardRef, useEffect, useMemo, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { Article } from "@/types";

interface FlipbookReaderProps {
  article: Article;
  fontSize: number;
  themeClass: string;
}

interface BookPageProps {
  children: React.ReactNode;
  className?: string;
  pageNumber?: number;
}

interface FlipbookHandle {
  pageFlip: () => {
    flipNext: (corner?: "top" | "bottom") => void;
    flipPrev: (corner?: "top" | "bottom") => void;
  };
}

const BookPage = forwardRef<HTMLDivElement, BookPageProps>(function BookPage(
  { children, className = "", pageNumber },
  ref,
) {
  return (
    <div ref={ref} className={`flipbook-page ${className}`}>
      <div className="flipbook-page-inner">
        {children}
        {pageNumber && <span className="flipbook-page-number">{pageNumber}</span>}
      </div>
    </div>
  );
});

function splitLongParagraph(html: string, limit: number) {
  const template = document.createElement("template");
  template.innerHTML = html;
  const element = template.content.firstElementChild;

  if (!element || element.textContent!.length <= limit) return [html];

  const wrapElement = (innerHtml: string) => {
    const wrapper = element.cloneNode(false) as Element;
    wrapper.innerHTML = innerHtml;
    return wrapper.outerHTML;
  };

  if (element.children.length) {
    const chunks: string[] = [];
    let current = "";
    let currentLength = 0;

    Array.from(element.children)
      .flatMap((child) => splitLongParagraph(child.outerHTML, limit))
      .forEach((childHtml) => {
        const holder = document.createElement("div");
        holder.innerHTML = childHtml;
        const childLength = holder.textContent?.trim().length || 0;

        if (current && currentLength + childLength > limit) {
          chunks.push(wrapElement(current));
          current = "";
          currentLength = 0;
        }

        current += childHtml;
        currentLength += childLength;
      });

    if (current) chunks.push(wrapElement(current));
    return chunks;
  }

  const words = element.textContent!.trim().split(/\s+/);
  const chunks: string[] = [];
  let current = "";

  words.forEach((word) => {
    if (current.length + word.length + 1 > limit && current) {
      chunks.push(wrapElement(current));
      current = word;
    } else {
      current += `${current ? " " : ""}${word}`;
    }
  });

  if (current) chunks.push(wrapElement(current));
  return chunks;
}

function paginateHtml(html: string, limit: number) {
  const template = document.createElement("template");
  template.innerHTML = html;
  const blocks = Array.from(template.content.children).flatMap((element) =>
    splitLongParagraph(element.outerHTML, limit),
  );
  const pages: string[] = [];
  let page = "";
  let pageLength = 0;

  blocks.forEach((block) => {
    const holder = document.createElement("div");
    holder.innerHTML = block;
    const blockLength = holder.textContent?.trim().length || 0;

    if (page && pageLength + blockLength > limit) {
      pages.push(page);
      page = "";
      pageLength = 0;
    }

    page += block;
    pageLength += blockLength;
  });

  if (page) pages.push(page);
  return pages;
}

export default function FlipbookReader({ article, fontSize, themeClass }: FlipbookReaderProps) {
  const bookRef = useRef<FlipbookHandle | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(1024);

  useEffect(() => {
    const updateViewportWidth = () => setViewportWidth(window.innerWidth);
    updateViewportWidth();
    window.addEventListener("resize", updateViewportWidth);
    return () => window.removeEventListener("resize", updateViewportWidth);
  }, []);

  const isPhone = viewportWidth < 640;
  const charsPerPage = Math.max(
    isPhone ? 520 : 980,
    Math.round((isPhone ? 760 : 1380) * (16 / fontSize)),
  );
  const contentPages = useMemo(
    () => paginateHtml(article.content, charsPerPage),
    [article.content, charsPerPage],
  );
  const totalPages = contentPages.length + 1;

  const flipPrevious = () => bookRef.current?.pageFlip()?.flipPrev("top");
  const flipNext = () => bookRef.current?.pageFlip()?.flipNext("top");

  return (
    <div className={`flipbook-reader ${themeClass}`} dir="ltr">
      <p className="flipbook-reader-hint" dir="rtl">
        اسحب زاوية الصفحة بإصبعك أو بالماوس للتقليب
      </p>
      <div className="flipbook-stage">
        <HTMLFlipBook
          key={`${article.title}-${fontSize}-${charsPerPage}`}
          ref={bookRef}
          className="flipbook"
          style={{}}
          width={460}
          height={640}
          size="stretch"
          minWidth={280}
          maxWidth={520}
          minHeight={420}
          maxHeight={720}
          startPage={0}
          drawShadow
          flippingTime={850}
          usePortrait
          startZIndex={0}
          autoSize
          maxShadowOpacity={0.45}
          showCover
          mobileScrollSupport
          clickEventForward
          useMouseEvents
          swipeDistance={24}
          showPageCorners
          disableFlipByClick={false}
          onFlip={(event) => setCurrentPage(event.data)}
          onInit={() => setCurrentPage(0)}
        >
          <BookPage className="flipbook-cover">
            <div className="flipbook-cover-content" dir="rtl">
              <div className="flipbook-cover-image">
                <Image
                  src={article.imageSrc}
                  alt={article.imageAlt}
                  fill
                  sizes="(max-width: 640px) 90vw, 460px"
                  className="object-cover"
                  priority
                />
              </div>
              <span>{article.category_ar}</span>
              <h2>{article.title}</h2>
              <p>{article.author}</p>
              <small>{article.date}</small>
            </div>
          </BookPage>
          {contentPages.map((page, index) => (
            <BookPage key={`${article.title}-${index}`} pageNumber={index + 1}>
              <div
                className="reader-article-content prose max-w-none text-slate-700"
                dir="rtl"
                dangerouslySetInnerHTML={{ __html: page }}
              />
            </BookPage>
          ))}
        </HTMLFlipBook>
      </div>
      <div className="flipbook-controls" dir="rtl">
        <button type="button" onClick={flipPrevious} disabled={currentPage === 0}>
          الصفحة السابقة
        </button>
        <span>
          {Math.min(currentPage + 1, totalPages)} من {totalPages}
        </span>
        <button type="button" onClick={flipNext} disabled={currentPage >= totalPages - 1}>
          الصفحة التالية
        </button>
      </div>
      <div className="flipbook-progress" aria-hidden="true">
        <span style={{ width: `${((currentPage + 1) / totalPages) * 100}%` }} />
      </div>
    </div>
  );
}
