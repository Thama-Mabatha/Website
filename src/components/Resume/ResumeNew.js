import React, { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { FiDownload, FiExternalLink } from "react-icons/fi";
import PageIntro from "../common/PageIntro";
import pdf from "../../Assets/Thama Mabatha CV.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const viewerRef = useRef(null);
  const [numPages, setNumPages] = useState(0);
  const [pageWidth, setPageWidth] = useState(760);

  useEffect(() => {
    const updateWidth = () => {
      if (!viewerRef.current) return;
      const available = viewerRef.current.clientWidth - 32;
      setPageWidth(Math.min(760, Math.max(280, available)));
    };

    updateWidth();

    if (typeof ResizeObserver !== "undefined") {
      const observer = new ResizeObserver(updateWidth);
      observer.observe(viewerRef.current);
      return () => observer.disconnect();
    }

    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <main className="resume-page">
      <PageIntro
        eyebrow="Resume"
        title="Experience, education and project work in one place."
        description="View the supplied two-page CV below or download the original PDF. The document itself is preserved without modification."
      />

      <section className="resume-actions-section">
        <div className="page-shell resume-actions">
          <div>
            <p className="eyebrow">Document</p>
            <h2>Thama Mabatha · Curriculum Vitae</h2>
          </div>
          <div>
            <a className="button button--primary" href={pdf} download="Thama-Mabatha-CV.pdf">
              <FiDownload aria-hidden="true" /> Download CV
            </a>
            <a className="button button--ghost" href={pdf} target="_blank" rel="noreferrer">
              Open PDF <FiExternalLink aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="resume-viewer-section">
        <div className="page-shell">
          <div className="resume-viewer" ref={viewerRef}>
            <Document
              file={pdf}
              onLoadSuccess={({ numPages: loadedPages }) => setNumPages(loadedPages)}
              loading={<div className="document-state">Loading CV preview…</div>}
              error={
                <div className="document-state document-state--error">
                  <strong>The embedded preview could not load.</strong>
                  <span>You can still download or open the original PDF above.</span>
                </div>
              }
              className="resume-document"
            >
              {Array.from(new Array(numPages), (_, index) => (
                <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  width={pageWidth}
                  renderTextLayer={false}
                  loading={<div className="document-state">Rendering page {index + 1}…</div>}
                />
              ))}
            </Document>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ResumeNew;
