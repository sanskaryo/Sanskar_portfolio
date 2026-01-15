// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";

// interface AboutModalProps {
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
// }

// export const AboutModal = ({ open, onOpenChange }: AboutModalProps) => {
//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <DialogContent 
//         className="
//           w-[95vw] sm:max-w-3xl max-h-[85vh] overflow-y-auto bg-card border-border p-4 sm:p-6
//           [&::-webkit-scrollbar]:w-2
//           [&::-webkit-scrollbar-track]:bg-transparent
//           [&::-webkit-scrollbar-thumb]:bg-muted-foreground/20
//           [&::-webkit-scrollbar-thumb]:rounded-full
//           hover:[&::-webkit-scrollbar-thumb]:bg-primary/50
//         "
//       >
//         <DialogHeader>
//           <DialogTitle className="text-xl sm:text-2xl font-bold text-primary">
//             About Me
//           </DialogTitle>
//         </DialogHeader>

//         <div className="space-y-6 sm:space-y-8 py-2 sm:py-4">
//           {/* Header Section */}
//           <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
//             <div className="space-y-3 sm:space-y-4">
//               <div>
//                 <h3 className="text-lg sm:text-xl font-semibold text-foreground">
//                   Sanskar Khandelwal
//                 </h3>
//                 <p className="text-sm sm:text-base text-terminal-info text-primary/80">
//                   AI Engineer · Full-Stack Developer
//                 </p>
//               </div>

//               <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
//                 I’m a 3rd-year Undergraduate at{" "}
//                 <span className="text-foreground font-medium">GLA University</span>{" "}
//                 who loves building real-world AI systems end-to-end — from model
//                 training and architecture optimization to scalable backend APIs.
//                 My work spans{" "}
//                 <span className="text-foreground font-medium">
//                   multi-agent systems
//                 </span>
//                 ,{" "}
//                 <span className="text-foreground font-medium">
//                   LLM-based text-to-SQL
//                 </span>
//                 ,{" "}
//                 <span className="text-foreground font-medium">
//                   IOT
//                 </span>
//                 , and{" "}
//                 <span className="text-foreground font-medium">
//                   computer vision
//                 </span>
//                 , with a strong focus on system design, performance, and
//                 practical impact.
//               </p>
//             </div>
//           </div>

//           {/* Skills */}
//           <div className="space-y-3">
//             <h4 className="text-xs sm:text-sm font-semibold text-foreground uppercase tracking-wider">
//               Core Skills
//             </h4>
//             <div className="flex flex-wrap gap-1.5 sm:gap-2">
//               {[
//                 "Python",
//                 "JavaScript",
//                 "TypeScript",
//                 "React",
//                 "Next.js",
//                 "Node.js",
//                 "FastAPI",
//                 "PostgreSQL",
//                 "MongoDB",
//                 "Machine Learning Algorithms",
//                 "LLMs (Llama, Gemma)",
//                 "Multi-Agent Systems",
//                 "LoRA / PEFT",
//                 "TensorFlow & PyTorch",
//                 "TFLite & On-device ML",
//                 "Computer Vision",
//               ].map((skill) => (
//                 <span
//                   key={skill}
//                   className="px-2.5 py-1 text-xs sm:text-sm bg-secondary text-secondary-foreground rounded-md border border-border transition-colors hover:bg-secondary/80"
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Experience */}
//           <div className="space-y-3">
//             <h4 className="text-xs sm:text-sm font-semibold text-foreground uppercase tracking-wider">
//               Experience & Highlights
//             </h4>
//             <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
//               <p>
//                 •{" "}
//                 <span className="text-foreground font-medium">
//                   AI Project Intern @ Anaam AI (IIT Ropar)
//                 </span>{" "}
//                 — Build Custom A2A systems from scratch and got PPO offer
//                 (Placement Offer)
//               </p>
//               <p>
//                 •{" "}
//                 <span className="text-foreground font-medium">
//                   AI Engineer @ Data Design Oy (Finland)
//                 </span>{" "}
//                 — Led development of a production-grade text-to-SQL system and
//                 achieved 69% on the BIRD benchmark.
//               </p>
//               <p>
//                 •{" "}
//                 <span className="text-foreground font-medium">
//                   ML Intern @ Innogical
//                 </span>{" "}
//                 — Built AI-powered student analytics adopted at the government
//                 level.
//               </p>
//             </div>
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// };


import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface AboutModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AboutModal = ({ open, onOpenChange }: AboutModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="
          w-[95vw] sm:max-w-3xl max-h-[85vh] overflow-y-auto bg-card border-border p-4 sm:p-6
          [&::-webkit-scrollbar]:w-2
          [&::-webkit-scrollbar-track]:bg-transparent
          [&::-webkit-scrollbar-thumb]:bg-muted-foreground/20
          [&::-webkit-scrollbar-thumb]:rounded-full
          hover:[&::-webkit-scrollbar-thumb]:bg-primary/50
        "
      >
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl font-bold text-primary">
            About Me
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 sm:space-y-8 py-2 sm:py-4">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
            <div className="space-y-3 sm:space-y-4">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                  Sanskar Khandelwal
                </h3>
                <p className="text-sm sm:text-base text-terminal-info text-primary/80">
                  Lead AI Engineer · Full-Stack Developer
                </p>
              </div>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                I’m a 3rd-year B.Tech Student at{" "}
                <span className="text-foreground font-medium">GLA University, Mathura</span>{" "}
                specializing in AI, ML, and IoT. I focus on building resilient, 
                real-world AI systems — from <span className="text-foreground font-medium">multi-agent orchestrators</span> 
                to <span className="text-foreground font-medium">multi-modal RAG pipelines</span>. 
                My work emphasizes practical reliability, verified performance benchmarks, and bridging 
                the digital divide for rural communities.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-3">
            <h4 className="text-xs sm:text-sm font-semibold text-foreground uppercase tracking-wider">
              Core Skills
            </h4>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {[
                "Python (FastAPI)",
                "LangGraph",
                "Agentic Workflows",
                "RAGAS Evaluation",
                "Hybrid Search (FAISS/BM25)",
                "Next.js",
                "TypeScript",
                "Redis Persistence",
                "Docker",
                "LoRA / PEFT",
                "Computer Vision (ResNet)",
                "IoT & Satellite Data (NDVI)",
                "MongoDB",
                "PostgreSQL",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 text-xs sm:text-sm bg-secondary text-secondary-foreground rounded-md border border-border transition-colors hover:bg-secondary/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Experience & Projects */}
          <div className="space-y-3">
            <h4 className="text-xs sm:text-sm font-semibold text-foreground uppercase tracking-wider">
              Career Highlights
            </h4>
            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                •{" "}
                <span className="text-foreground font-medium">
                  AI Project Intern @ Annam.AI (IIT Ropar)
                </span>{" "}
                — Engineered the core GenAI architecture for AgroVista; implemented local model 
                inference fallbacks and achieved a 0.08 hallucination score.
              </p>
              <p>
                •{" "}
                <span className="text-foreground font-medium">
                  Pragati AI: Intelligent Decision Platform
                </span>{" "}
                — Developed an Adaptive RAG system with a complexity analyzer and swarm-based 
                multi-agent orchestration achieving 78.51% accuracy.
              </p>
              <p>
                •{" "}
                <span className="text-foreground font-medium">
                  National Agritech Hackathon Winner
                </span>{" "}
                — Led a team of 4 to secure a ₹4,00,000 grant from the Ministry of Education 
                for AI+IoT agricultural innovation.
              </p>
              <p>
                •{" "}
                <span className="text-foreground font-medium">
                  Azure AI Fundamentals (AI-900)
                </span>{" "}
                — Microsoft certified professional in foundational Azure AI services.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};