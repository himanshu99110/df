import { useState, type FormEvent, type ChangeEvent } from "react";
import { Upload, CheckCircle2, Send } from "lucide-react";

const ApplicationForm = () => {
  const [fileName, setFileName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="apply" className="py-20 md:py-28 bg-surface-teal">
        <div className="container max-w-2xl text-center">
          <div className="bg-card rounded-2xl p-12 shadow-elevated ring ring-gray-200">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="text-primary" size={40} />
            </div>
            <h3 className="heading-display text-3xl font-bold text-foreground mb-3">Application Submitted!</h3>
            <p className="text-muted-foreground text-lg">
              Thank you for your interest. Our HR team will review your application and get back to you within 5 business days.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-card rounded-2xl p-8 md:p-12 shadow-elevated ring ring-gray-200 relative overflow-hidden"
      >
        <div className="absolute -right-20 -top-20 h-54 w-54 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 relative z-1">
          <div>
            <label className="mb-2 block text-[13px] font-semibold text-[#1E293B]">First Name <span className="font-normal text-red-500 text-sm">*</span></label>
            <input
              required
              placeholder="John"
              className="w-full rounded-lg border bg-[#f2f6f9] px-5 py-4 text-[14px] text-[#334155] placeholder-[#94A3B8] transition-all focus:ring-2 focus:outline-none border-transparent focus:border-blue-200 focus:ring-blue-100"
            />
          </div>
          <div>
            <label className="mb-2 block text-[13px] font-semibold text-[#1E293B]">Last Name <span className="font-normal text-red-500 text-sm">*</span></label>
            <input
              required
              placeholder="Doe"
              className="w-full rounded-lg border bg-[#f2f6f9] px-5 py-4 text-[14px] text-[#334155] placeholder-[#94A3B8] transition-all focus:ring-2 focus:outline-none border-transparent focus:border-blue-200 focus:ring-blue-100"
            />
          </div>
          <div>
            <label className="mb-2 block text-[13px] font-semibold text-[#1E293B]">Email Address <span className="font-normal text-red-500 text-sm">*</span></label>
            <input
              required
              type="email"
              placeholder="john@example.com"
              className="w-full rounded-lg border bg-[#f2f6f9] px-5 py-4 text-[14px] text-[#334155] placeholder-[#94A3B8] transition-all focus:ring-2 focus:outline-none border-transparent focus:border-blue-200 focus:ring-blue-100"
            />
          </div>
          <div>
            <label className="mb-2 block text-[13px] font-semibold text-[#1E293B]">Phone Number <span className="font-normal text-red-500 text-sm">*</span></label>
            <input
              required
              type="tel"
              placeholder="+91 98765 43210"
              className="w-full rounded-lg border bg-[#f2f6f9] px-5 py-4 text-[14px] text-[#334155] placeholder-[#94A3B8] transition-all focus:ring-2 focus:outline-none border-transparent focus:border-blue-200 focus:ring-blue-100"
            />
          </div>
          <div>
            <label className="mb-2 block text-[13px] font-semibold text-[#1E293B]">Position Applied For <span className="font-normal text-red-500 text-sm">*</span></label>
            <select
              required
              className="w-full h-12 rounded-xl border border-border/60 bg-background px-4 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
            >
              <option value="">Select a position</option>
              <option value="Front End Developer">Front End Developer</option>
              <option value="Back End Developer">Back End Developer</option>
              <option value="Full Stack Developer">Full Stack Developer</option>
              <option value="UI/UX Designer">UI/UX Designer</option>
              <option value="Product Manager">Product Manager</option>
              <option value="SEO">SEO</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-[13px] font-semibold text-[#1E293B]">Years of Experience <span className="font-normal text-red-500 text-sm">*</span></label>
            <input
              required
              type="number"
              min="0"
              placeholder="5"
              className="w-full rounded-lg border bg-[#f2f6f9] px-5 py-4 text-[14px] text-[#334155] placeholder-[#94A3B8] transition-all focus:ring-2 focus:outline-none border-transparent focus:border-blue-200 focus:ring-blue-100"
            />
          </div>
        </div>

        <div className="mb-6 relative z-1">
          <label className="mb-2 block text-[13px] font-semibold text-[#1E293B]">Cover Letter <span className="font-normal text-red-500 text-sm">*</span></label>
          <textarea
            placeholder="Tell us why you'd be a great fit..."
            rows={4}
            className="w-full resize-none rounded-lg border bg-[#f2f6f9] px-5 py-4 text-[14px] text-[#334155] placeholder-[#94A3B8] transition-all focus:ring-2 focus:outline-none border-transparent focus:border-blue-200 focus:ring-blue-100"
          />
        </div>

        {/* Resume Upload */}
        <div className="mb-8 relative z-1">
          <label className="mb-2 block text-[13px] font-semibold text-[#1E293B]">Upload Resume <span className="font-normal text-red-500 text-sm">*</span></label>
          <label className="flex flex-col items-center justify-center w-full h-32 custom-border-dashed-2 rounded-2xl cursor-pointer bg-white hover:border-primary/20 hover:bg-accent/10 transition-all duration-300 group">
            <Upload size={28} className="text-muted-foreground mb-2 group-hover:text-primary transition-colors" />
            {fileName ? (
              <span className="text-sm font-medium text-primary">{fileName}</span>
            ) : (
              <>
                <span className="text-sm text-muted-foreground">Drop your resume here or <span className="text-primary font-medium">browse</span></span>
                <span className="text-xs text-muted-foreground/70 mt-1">PDF, DOC, DOCX (max 5MB)</span>
              </>
            )}
            <input type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
          </label>
        </div>

        <button type="submit" className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-4 text-[15px] font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#1E293B] disabled:cursor-not-allowed disabled:opacity-70">
          Submit Application
          <Send size={18} />
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
