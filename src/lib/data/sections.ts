export const researchContent = {
    en: {
        title: "Research Focus",
        sections: [
            {
                id: "reliability",
                heading: "Logic Validation & Reliability",
                subtitle: "Strengthening AI reasoning through validation layers (LogicShield Theory)",
                body: "Instead of relying on 'accidental correctness' of LLMs, we build structural reliability. We use Validator, Critic, and Rule Engine layers to detect hallucinations and enforce logic. We aim to enhance reliability by strengthening the 'Verification Architecture' rather than just making models larger."
            },
            {
                id: "cognitive-os",
                heading: "Cognitive Operating Systems",
                subtitle: "Treating LLMs as CPUs inside an OS (ContextOS Theory)",
                body: "We reinterpret LLMs not as the whole system, but as a CPU component within a larger 'Cognitive OS'. This research focuses on deterministic task management, memory hierarchy (SynapseVault), and robust Agent/Tool orchestration."
            },
            {
                id: "cooperative-intelligence",
                heading: "Cooperative Intelligence Architecture",
                subtitle: "Multi-SLM reasoning structure (SynapseMesh Theory)",
                body: "A specialized architecture where Planner, Worker, Reviewer, and other SLMs collaborate. We prove that a stable multi-stage reasoning structure ('Structure beats Parameter') can outperform single giant models."
            }
        ]
    },
    jp: {
        title: "Research Focus",
        sections: [
            {
                id: "reliability",
                heading: "Logic Validation & Reliability",
                subtitle: "Strengthening AI reasoning through validation layers (LogicShield Theory)",
                body: "LLMの出力が「たまたま」正しい状態に頼るのではなく、構造的な信頼性を構築します。Validator、Critic、Rule Engine層を用いてハルシネーションを検知し、論理を強制します。モデル規模よりも「検証アーキテクチャ」を重視します。"
            },
            {
                id: "cognitive-os",
                heading: "Cognitive Operating Systems",
                subtitle: "Treating LLMs as CPUs inside an OS (ContextOS Theory)",
                body: "LLMをシステム全体と捉えるのではなく、より大きな「Cognitive OS」内のCPUコンポーネントとして再解釈します。決定論的なタスク管理、メモリ階層（SynapseVault）、そして堅牢なAgent/Toolオーケストレーションに焦点を当てています。"
            },
            {
                id: "cooperative-intelligence",
                heading: "Cooperative Intelligence Architecture",
                subtitle: "Multi-SLM reasoning structure (SynapseMesh Theory)",
                body: "Planner、Worker、ReviewerなどのSLMが協調する特化型アーキテクチャです。安定した多段推論構造（Structure beats Parameter）が、単一の巨大モデルを凌駕することを実証します。"
            }
        ]
    }
};

export const projectsContent = {
    en: {
        title: "Current Projects",
        sections: [
            {
                id: "logic-validator",
                slug: "logic-validator",
                heading: "Logic Validator (Under Preparation)",
                body: "A research project aimed at increasing inference consistency and safety by passing LLM/SLM outputs through a 'logic inspection line'. We are combining rule-based/LLM-based validators and using Fault Injection to evaluate robustness. Targeting ICLR 2026."
            },
            {
                id: "context-os",
                slug: "context-os",
                heading: "ContextOS (Under Preparation)",
                body: "A project reinterpreting LLMs/SLMs not as embedded AI but as an 'OS-like layer handling intelligence'. We focus on deterministic state management, module control structures (Manager-Worker), and stable Agent/Tool system design."
            },
            {
                id: "x-mesh",
                slug: "x-mesh",
                heading: "X-Mesh (Frontier-Class Reasoning Engine)",
                body: "A cooperative reasoning engine built from multiple small LLMs. Designed to rival GPT-5.1/Gemini-class Frontier Models through 'Structure beats Parameter' architecture, employing Planner-Worker-Reviewer methodology."
            },
            {
                id: "exiton-agi",
                slug: "exiton-agi",
                heading: "[FINAL PROJECT] EXITON AGI (Self-Motivated General Intelligence)",
                body: "A long-term research project aiming to build a self-motivated AGI that can discover problems, plan experiments, and improve itself using the EXITON architecture: ContextOS, LogicShield, and X-Mesh."
            }
        ]
    },
    jp: {
        title: "Current Projects",
        sections: [
            {
                id: "logic-validator",
                slug: "logic-validator",
                heading: "Logic Validator (Under Preparation)",
                body: "LLM/SLM の出力に対して「論理の検品ライン」を通すことで、推論の一貫性と安全性を高めることを目指した研究プロジェクトです。論理検証・Validator の組み合わせや Fault Injection による評価を行い、ICLR 2026 への投稿を目指しています。"
            },
            {
                id: "context-os",
                slug: "context-os",
                heading: "ContextOS (Under Preparation)",
                body: "LLM/SLM を「アプリの中に埋め込む AI」ではなく、「知能を支えるOS的レイヤ」として再解釈するプロジェクトです。タスク状態の決定論的な管理や、Manager-Worker による制御構造、小規模モデルでも安定するシステム設計を研究しています。"
            },
            {
                id: "x-mesh",
                slug: "x-mesh",
                heading: "X-Mesh (Frontier-Class Reasoning Engine)",
                body: "小型LLMを複数協調させることで、GPT-5.1/Gemini級の推論性能を「構造」で実現する次世代推論エンジン。Planner-Worker-Reviewerの合議制を採用し、パラメータ数に頼らない知能の拡張を目指します。"
            },
            {
                id: "exiton-agi",
                slug: "exiton-agi",
                heading: "[FINAL PROJECT] EXITON AGI (Self-Motivated General Intelligence)",
                body: "ContextOS・LogicShield・X-Mesh から成る EXITON アーキテクチャの上に、自ら課題を発見し、実験計画を立て、自己改善できる『自己目的的汎用知能（AGI）』を構築する長期プロジェクトです。"
            }
        ]
    }
};

export const principlesContent = {
    en: {
        title: "Research Principles",
        intro: "EXITON Lab’s principles describe how we believe AI systems should be built: structured, reliable, human-centered, and local-first. We reject the 'bigger is better' dogma in favor of architectures that are transparent, verifiable, and collaboratively integrated with human reasoning.",
        closing: "EXITON AGI is not just a system design. It is a philosophy of how intelligence should be built: transparent, modular, reliable, and human-guided.",
        sections: [
            {
                id: "structure-beats-scale",
                heading: "Principle 1 — Structure Beats Scale",
                image: "/images/principle_structure.png",
                content: [
                    "**Main Statement**: Intelligent behavior emerges not just from parameter count, but from the architecture of interaction. A well-structured mesh of small models can outperform a single giant monolith.",
                    "**Why it matters**: Monolithic models are opaque, expensive, and prone to hallucination. Structured systems (X-Mesh) are transparent, debuggable, and efficient.",
                    "**Implementation**: In ContextOS, we treat models as modular CPUs. X-Mesh orchestrates small specialized agents (Planner, Worker, Reviewer) to achieve frontier-class reasoning with a fraction of the compute."
                ]
            },
            {
                id: "human-ai-coresearch",
                heading: "Principle 2 — Human–AI Co-Research",
                image: "/images/principle_co_research.png",
                content: [
                    "**Main Statement**: AI should not be an 'automation tool' that replaces humans, but a 'research partner' that expands human cognition.",
                    "**Why it matters**: Full automation often leads to loss of control and understanding. Co-research keeps the human in the loop for high-level direction and value judgment.",
                    "**Implementation**: EXITON AGI is built on a dual-loop system: the AI runs experiment cycles, but constantly feeds insights back to the human for reflection and course correction."
                ]
            },
            {
                id: "local-intelligence",
                heading: "Principle 3 — Local Intelligence",
                image: "/images/principle_local.png",
                content: [
                    "**Main Statement**: Frontier-class intelligence should not be the monopoly of cloud giants. It must run locally, under the user's control.",
                    "**Why it matters**: Privacy, autonomy, and democratization. Researchers must own their tools and data without dependency on external APIs.",
                    "**Implementation**: Our architecture (ContextOS + X-Mesh) is optimized for consumer hardware, enabling powerful AGI agents to run entirely on your local machine."
                ]
            }
        ]
    },
    jp: {
        title: "Research Principles",
        intro: "EXITON Lab の原則は、AIシステムがあるべき姿を示しています。それは、構造化され、信頼性が高く、人間中心であり、ローカルファーストであることです。私たちは「巨大であればあるほど良い」というドグマを否定し、透明で検証可能、かつ人間の思考と協調するアーキテクチャを追求します。",
        closing: "EXITON AGI は単なるシステム設計ではありません。「知能はどのように構築されるべきか」という哲学そのものです。透明で、モジュール式で、信頼性が高く、そして人間に導かれる知能です。",
        sections: [
            {
                id: "structure-beats-scale",
                heading: "Principle 1 — Structure Beats Scale",
                image: "/images/principle_structure.png",
                content: [
                    "**Main Statement**: 知的振る舞いはパラメータ数だけでなく「相互作用の構造」から創発します。適切に構造化された小型モデルのメッシュは、単一の巨大なモノリスを凌駕します。",
                    "**Why it matters**: モノリシックなモデルは不透明で高コストであり、ハルシネーションを起こしやすい傾向があります。構造化されたシステム（X-Mesh）は透明でデバッグ可能かつ効率的です。",
                    "**Implementation**: ContextOS ではモデルをモジュール式のCPUとして扱います。X-Mesh は、Planner、Worker、Reviewer といった専門エージェントを指揮し、わずかな計算リソースで Frontier クラスの推論を実現します。"
                ]
            },
            {
                id: "human-ai-coresearch",
                heading: "Principle 2 — Human–AI Co-Research",
                image: "/images/principle_co_research.png",
                content: [
                    "**Main Statement**: AI は人間を置き換える「自動化ツール」ではなく、人間の認知を拡張する「研究パートナー」であるべきです。",
                    "**Why it matters**: 完全自動化はしばしば制御と理解の喪失を招きます。Co-Research（共同研究）は、高レベルの方向付けと価値判断のために人間をループ内に留めます。",
                    "**Implementation**: EXITON AGI は二重ループシステムに基づいています。AI は実験サイクルを回しますが、洞察を絶えず人間にフィードバックし、省察と軌道修正を促します。"
                ]
            },
            {
                id: "local-intelligence",
                heading: "Principle 3 — Local Intelligence",
                image: "/images/principle_local.png",
                content: [
                    "**Main Statement**: Frontier クラスの知能は、クラウドの巨大企業による独占物であってはなりません。それはローカルで、ユーザーの管理下で動作すべきです。",
                    "**Why it matters**: プライバシー、自律性、そして民主化のためです。研究者は外部APIに依存せず、自身のツールとデータを所有しなければなりません。",
                    "**Implementation**: 私たちのアーキテクチャ（ContextOS + X-Mesh）は民生用ハードウェア向けに最適化されており、強力な AGI エージェントをローカルマシン上で完全に動作させることを可能にします。"
                ]
            }
        ]
    }
};
