import { certificateData } from "@/lib/data";
import { CertificateCard } from "@/components/CertificateCard";

export default function CertificatesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 pt-24 pb-20">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Certificates</h1>
      <p className="text-gray-600 dark:text-slate-400 mb-12">Professional certifications and academic achievements.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificateData.map((cert, i) => (
          <CertificateCard key={i} item={cert} />
        ))}
      </div>
    </main>
  );
}
