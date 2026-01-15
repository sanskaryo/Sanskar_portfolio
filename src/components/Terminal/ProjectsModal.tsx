import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ExternalLink, Github, Code2, BrainCircuit, BarChart3, Car } from "lucide-react";

interface ProjectsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ProjectsModal = ({ open, onOpenChange }: ProjectsModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="
          w-[95vw] sm:max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-border p-4 sm:p-8
          [&::-webkit-scrollbar]:w-2
          [&::-webkit-scrollbar-track]:bg-transparent
          [&::-webkit-scrollbar-thumb]:bg-muted-foreground/20
          [&::-webkit-scrollbar-thumb]:rounded-full
          hover:[&::-webkit-scrollbar-thumb]:bg-primary/50
        "
      >
        <DialogHeader>
          <DialogTitle className="text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <Code2 className="w-8 h-8" />
            Sanskar Khandelwal
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-8 py-4">
          {/* Intro Section */}
          <div className="space-y-4">
            <p className="text-lg text-primary/90 font-medium">
               AI Engineer • Full-Stack Developer • Pre final year
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I specialize in building Agentic AI Infrastructure and Autonomous Systems. 
              My expertise lies in orchestrating multi-agent swarms using LangGraph, optimizing 
              RAG pipelines for specialized domains, and bridging the gap between raw data 
              (NoSQL/IoT) and natural language insights.
            </p>
          </div>

          {/* Experience Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-xl border border-border bg-secondary/30 space-y-2">
              <h4 className="font-bold text-foreground flex items-center gap-2">
                <BrainCircuit className="w-5 h-5 text-primary" />
                AI Project Intern @ IIT Ropar
              </h4>
              <p className="text-sm text-muted-foreground">
                Built AgroVista for the Centre of Excellence. Engineered a multi-modal 
                RAG system with local inference fallbacks. Achieved a 0.08 hallucination 
                score in RAGAS evaluations.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-secondary/30 space-y-2">
              <h4 className="font-bold text-foreground flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                Analytics Specialist
              </h4>
              <p className="text-sm text-muted-foreground">
                Developed custom MCP (Model Context Protocol) servers for MongoDB and 
                automated visualization engines for high-throughput data analysis.
              </p>
            </div>
          </div>

          {/* Projects Section */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-widest border-b border-border pb-2">
              Featured Projects
            </h4>
            <div className="grid grid-cols-1 gap-4">
              {/* Project 1: MongoDB MCP */}
              <div className="group relative p-4 rounded-lg border border-border hover:border-primary/50 transition-all">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="font-bold text-primary">LuminaDB: MongoDB Analytics Agent</h5>
                    <p className="text-sm text-muted-foreground mt-1">
                      Professional-grade MCP platform using LangGraph and Redis for cyclic reasoning 
                      and session-aware memory over NoSQL data.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <a href="https://github.com/sanskaryo/MongoDB_mcp" target="_blank" className="hover:text-primary"><Github className="w-5 h-5" /></a>
                    <a href="https://mcp-server-mongo.vercel.app/" target="_blank" className="hover:text-primary"><ExternalLink className="w-5 h-5" /></a>
                  </div>
                </div>
              </div>

              {/* Project 2: Pragati AI */}
              <div className="group relative p-4 rounded-lg border border-border hover:border-primary/50 transition-all">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="font-bold text-primary">Pragati AI (AgroAI)</h5>
                    <p className="text-sm text-muted-foreground mt-1">
                      Multi-agent ecosystem for agriculture with 15+ specialized agents. 
                      Integrates Computer Vision for disease detection and NDVI satellite analysis.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <a href="https://github.com/sanskaryo/AgroAI" target="_blank" className="hover:text-primary"><Github className="w-5 h-5" /></a>
                  </div>
                </div>
              </div>

              {/* Project 3: Trackverse */}
              <div className="group relative p-4 rounded-lg border border-border hover:border-primary/50 transition-all">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="font-bold text-primary">Trackverse</h5>
                    <p className="text-sm text-muted-foreground mt-1">
                      Unified dashboard for LeetCode, Codeforces, and GFG stats. 
                      Built with Next.js 15 and TypeScript for interview prep analytics.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <a href="https://github.com/sanskaryo/trackverse" target="_blank" className="hover:text-primary"><Github className="w-5 h-5" /></a>
                    <a href="https://trackverse-gla.vercel.app/" target="_blank" className="hover:text-primary"><ExternalLink className="w-5 h-5" /></a>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {/* Project 4: DataLens */}
                <div className="p-4 rounded-lg border border-border hover:border-primary/50 transition-all">
                  <h5 className="font-bold text-primary flex items-center gap-2">
                    <BarChart3 className="w-4 h-4" /> DataLens
                  </h5>
                  <p className="text-xs text-muted-foreground mt-1">
                    SQL Agent that converts natural language to interactive Recharts visualizations.
                  </p>
                </div>
                {/* Project 5: ADAS */}
                <div className="p-4 rounded-lg border border-border hover:border-primary/50 transition-all">
                  <h5 className="font-bold text-primary flex items-center gap-2">
                    <Car className="w-4 h-4" /> ADAS Drowsiness
                  </h5>
                  <p className="text-xs text-muted-foreground mt-1">
                    Real-time Computer Vision system using OpenCV and EAR algorithms to detect driver fatigue.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-foreground uppercase tracking-widest">Stack & Tools</h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Python (FastAPI)", "LangGraph", "MCP", "Next.js 15", "TypeScript", 
                "React 19", "Redis", "MongoDB Atlas", "PostgreSQL", "Docker Compose", 
                "FAISS", "TensorFlow", "OpenCV", "RAGAS", "Tailwind CSS"
              ].map((tech) => (
                <span key={tech} className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full border border-border">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};







// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Github } from "lucide-react";

// interface Project {
//   id: number;
//   title: string;
//   description: string;
//   techStack: string[];
//   githubUrl?: string;
// }

// const projects: Project[] = [
//   {
//     id: 1,
//     title: "Smart Council",
//     description: "Architected a multi-agent orchestration framework with automated task decomposition, dependency-graph traversal, and parallel execution optimization using Llama-3.1-8B-Instruct and ThreadPoolExecutor.",
//     techStack: ["Llama 3.1", "SQLite", "ThreadPoolExecutor", "HuggingFace API", "Multi-Agent Systems"],
//     githubUrl: "https://github.com/Sanskaryo/SmartCouncil",
//   },
//   {
//     id: 2,
//     title: "Decoder Only Transformer Architecture",
//     description: "Engineered a production-grade decoder-only transformer from scratch with KV-cache optimization, beam search inference, and memory-efficient training via gradient checkpointing and accumulation.",
//     techStack: ["PyTorch", "Transformer Architecture", "KV Cache", "Gradient Checkpointing", "Beam Search"],
//     githubUrl: "https://github.com/Sanskaryo/Decoder-Only-Transformer-LLM-From-scratch",
//   },
//   {
//     id: 3,
//     title: "Mixture of Experts for Edge Devices",
//     description: "Deployed a fully offline multi-agent mental health chatbot with five LoRA-fine-tuned Gemma-3-1B models, orchestrated via TF-IDF vectorization and quantized to ~150MB per model using TensorFlow Lite and 4-bit quantization.",
//     techStack: ["Gemma", "LoRA/PEFT", "TensorFlow Lite", "4-bit Quantization", "MediaPipe", "TF-IDF", "Logistic Regression"],
//     githubUrl: "https://github.com/Sanskaryo/MOE2",
//   },
//   {
//     id: 4,
//     title: "RL Stock Market Bot",
//     description: "Developed a deep reinforcement learning trading agent with custom environment simulation, neural network-based policy optimization, and automated model checkpointing for adaptive buy/sell decision-making.",
//     techStack: ["Reinforcement Learning", "Deep Q-Network", "PyTorch", "NumPy", "Pandas", "Policy Optimization"],
//     githubUrl: "https://github.com/Sanskar-Vashishtha/RL-Stock-Market-Bot",
//   },
//   {
//     id: 5,
//     title: "LLM-Based Hotel Search",
//     description: "Built a natural language hotel search engine leveraging vector embeddings and cosine similarity for semantic retrieval, eliminating traditional filters with a scalable Node.js/Flask backend and MongoDB vector storage.",
//     techStack: ["Vector Embeddings", "Cosine Similarity", "MongoDB", "Node.js", "Express", "Flask", "LLM", "Semantic Search"],
//     githubUrl: "https://github.com/Sanskar-Vashishtha/AI-Search-Engine-For-Hotels",
//   },
//   {
//     id: 6,
//     title: "Visual Taxonomy Attribute Prediction",
//     description: "Designed a multi-output ResNet50-based deep learning model with advanced data augmentation, handling large-scale visual taxonomy classification across multiple attributes using categorical cross-entropy and tf.data pipelines.",
//     techStack: ["TensorFlow", "ResNet50", "Data Augmentation", "Multi-Output Classification", "Batch Normalization", "Dropout"],
//     githubUrl: "https://github.com/Sanskar-Vashishtha/Meesho_Hackathon",
//   },
//   {
//     id: 7,
//     title: "T20 Match Winner Prediction",
//     description: "Achieved top-20 nationally among 4200 teams by engineering advanced feature extraction pipelines and deploying XGBoost with comprehensive EDA, missing data imputation, and ground-level statistical modeling.",
//     techStack: ["XGBoost", "Feature Engineering", "EDA", "Pandas", "NumPy", "scikit-learn", "Data Imputation"],
//     githubUrl: "https://github.com/Sanskar-Vashishtha/AmericalExpress-Comp",
//   },
//   {
//     id: 8,
//     title: "Hand Gesture Cursor Control",
//     description: "Implemented real-time gesture recognition system using custom-trained YOLO keypoint detection for fingertip tracking, enabling hands-free cursor control and pinch-to-click functionality via OpenCV and PyAutoGUI integration.",
//     techStack: ["YOLO", "OpenCV", "PyAutoGUI", "Keypoint Detection", "Computer Vision", "Real-time Processing"],
//     githubUrl: "https://github.com/Sanskar-Vashishtha/Hand-Gesture-Cursor-Control",
//   },
// ];

// interface ProjectsModalProps {
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
// }

// export const ProjectsModal = ({ open, onOpenChange }: ProjectsModalProps) => {
//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <DialogContent className="w-[95vw] max-w-6xl bg-card border-border max-h-[85vh] flex flex-col">
//         <DialogHeader>
//           <DialogTitle className="text-2xl font-bold text-primary">
//             My Projects
//           </DialogTitle>
//         </DialogHeader>
        
//         {/* Added snap-x and snap-mandatory for smooth mobile scrolling */}
//         <div className="overflow-x-auto py-4 -mx-2 px-2 snap-x snap-mandatory
//           [&::-webkit-scrollbar]:h-2
//           [&::-webkit-scrollbar-track]:bg-transparent
//           [&::-webkit-scrollbar-thumb]:bg-muted-foreground/20
//           [&::-webkit-scrollbar-thumb]:rounded-full
//           hover:[&::-webkit-scrollbar-thumb]:bg-primary/50
//           transition-colors"
//         >
//           <div className="flex gap-4 md:gap-6 w-max pb-2">
//             {projects.map((project) => (
//               <div
//                 key={project.id}
//                 // CHANGED: w-[85vw] for mobile, w-96 for desktop. Added snap-center.
//                 className="group w-[85vw] md:w-96 shrink-0 snap-center bg-secondary rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
//               >
                
//                 <div className="p-5 space-y-3 relative flex flex-col h-full">
//                   <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
//                     {project.title}
//                   </h3>
                  
//                   <p className="text-sm text-muted-foreground leading-relaxed">
//                     {project.description}
//                   </p>
                  
//                   <div className="flex flex-wrap gap-1.5">
//                     {project.techStack.map((tech) => (
//                       <span
//                         key={tech}
//                         className="px-2 py-0.5 text-xs bg-background text-terminal-info rounded border border-border"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
                  
//                   <div className="pt-2 mt-auto">
//                     {project.githubUrl && (
//                       <a
//                         href={project.githubUrl}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors w-fit"
//                       >
//                         <Github className="w-4 h-4" />
//                         Code
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
        
//         <p className="text-xs text-muted-foreground text-center">← Scroll horizontally to see more →</p>
//       </DialogContent>
//     </Dialog>
//   );
// };