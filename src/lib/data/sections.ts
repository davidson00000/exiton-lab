export const researchContent = {
    en: {
        title: "Research Focus",
        doctrines: {
            title: "EXITON 3 Doctrines",
            items: [
                {
                    heading: "Doctrine 1 — Structure Over Scale",
                    body: "Intelligence emerges from structure, not size.\nEXITON challenges the belief that \"bigger models = smarter models.\"\nWe design systems where multiple small models cooperate through structured roles to outperform monolithic Frontier models in reasoning stability, transparency, and efficiency."
                },
                {
                    heading: "Doctrine 2 — Human-Led Intelligence",
                    body: "AI should extend human cognition, not replace it.\nEXITON AGI is built on a dual-loop architecture where humans provide direction and values, while AI performs rapid experiment cycles.\nHuman–AI co-research ensures safe, interpretable, and meaningful intelligence."
                },
                {
                    heading: "Doctrine 3 — Local-First AGI",
                    body: "Intelligence must be owned, not rented.\nFrontier-class reasoning should run on local hardware under the user’s control.\nEXITON builds a decentralized, privacy-preserving, and autonomous AGI architecture optimized for consumer GPUs."
                }
            ],
            summary: "These doctrines define the foundation of EXITON Lab.\nWe build intelligence that is structured, human-guided, and locally owned."
        },
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
        doctrines: {
            title: "EXITON 3 Doctrines（EXITON 三原則）",
            items: [
                {
                    heading: "Doctrine 1 — Structure Over Scale",
                    body: "知能はパラメータ数ではなく構造から生まれる。\nEXITON は「大きいモデルほど賢い」というドグマを否定し、\n複数の小型モデルを協調させる構造的アーキテクチャによって\nフロンティアモデルを超える推論安定性・透明性・効率性を目指す。"
                },
                {
                    heading: "Doctrine 2 — Human-Led Intelligence",
                    body: "AI は人間を置き換えるのではなく、人間の思考を拡張する外部器官である。\nEXITON AGI は人間が方向性と価値判断を行い、AI が高速な実験サイクルを回す\nデュアルループ構造によって、安全で解釈可能な共同研究を実現する。"
                },
                {
                    heading: "Doctrine 3 — Local-First AGI",
                    body: "知能は「借り物」ではなく「所有物」であるべきだ。\nフロンティア級推論はユーザー自身のマシン上で動作し、\nプライバシー、自律性、長期運用性、知能の民主化を保証する。"
                }
            ],
            summary: "これらのドクトリンは EXITON Lab の基盤であり、\n構造化され、人間が舵取りし、ユーザーが所有できる知能の実現を目指す。"
        },
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
                    "**Why it matters**: <br/>• Monolithic models are opaque, expensive, and prone to hallucination.<br/>• Structured systems (such as X-Mesh) are transparent, debuggable, and efficient.<br/>• By distributing roles (Planner / Worker / Reviewer / Consensus / Memory), structured AI achieves frontier-class reasoning with far less compute.",
                    "**Implementation**: In ContextOS, we treat models as modular CPUs.<br/>X-Mesh orchestrates small specialized agents (Planner, Worker, Reviewer) to achieve frontier-class reasoning through cooperative multi-agent architecture."
                ]
            },
            {
                id: "human-ai-coresearch",
                heading: "Principle 2 — Human–AI Co-Research",
                image: "/images/principle_co_research.png",
                content: [
                    "**Main Statement**: AI should not be an automation tool that replaces humans, but a research partner that expands human cognition.",
                    "**Why it matters**: <br/>• Full automation often leads to loss of control and understanding.<br/>• Co-research keeps the human in the loop for high-level direction and value judgment.",
                    "**Implementation**: EXITON AGI operates with a dual-loop design:<br/>The AI runs rapid experiment cycles, constantly feeding insights back to the human researcher for reflection and course correction."
                ]
            },
            {
                id: "local-intelligence",
                heading: "Principle 3 — Local Intelligence",
                image: "/images/principle_local.png",
                content: [
                    "**Main Statement**: Frontier-class intelligence should not be the monopoly of cloud giants. It must run locally, under the user's control.",
                    "**Why it matters**: <br/>• Privacy, autonomy, and democratization.<br/>• Researchers must own their tools and data without dependency on external APIs.",
                    "**Implementation**: Our architecture (ContextOS × X-Mesh) is optimized for consumer hardware, enabling powerful AGI agents to run entirely on local machines."
                ]
            }
        ]
    },
    jp: {
        title: "Research Principles",
        intro: "EXITON Lab の Research Principles は、「巨大モデル依存ではない AI の作り方」を示す指針です。構造化・人間との協働・ローカル実行を軸に、透明で検証可能な知能アーキテクチャを追求します。",
        closing: "「EXITON AGI は単なるシステム設計ではありません。知能をどのように作るべきか――透明で、モジュラーで、信頼でき、人間が舵取りする存在であるべきだという哲学そのものです。」",
        sections: [
            {
                id: "structure-beats-scale",
                heading: "Principle 1 — Structure Beats Scale",
                image: "/images/principle_structure.png",
                content: [
                    "**Main Statement**: 知的なふるまいはパラメータ数だけでなく、相互作用のアーキテクチャから生まれます。役割が整理された複数の小さなモデルのメッシュは、単一の巨大モデルを上回ることができます。",
                    "**Why it matters**: <br/>• モノリシックな巨大モデルは、不透明・高コストで、幻覚を起こしやすいという問題を抱えています。<br/>• 一方で、X-Mesh のような構造化されたシステムは、透明性が高く、デバッグしやすく、効率的です。<br/>• Planner / Worker / Reviewer / Consensus / Memory などの役割を分散することで、構造化 AI は、はるかに少ない計算資源でフロンティア級の推論を実現できます。",
                    "**Implementation**: ContextOS では、モデルをモジュラーな CPU のように扱います。<br/>X-Mesh は、Planner / Worker / Reviewer などの小さな専門エージェントをオーケストレーションし、協調型マルチエージェント構造によってフロンティア級の推論を実現します。"
                ]
            },
            {
                id: "human-ai-coresearch",
                heading: "Principle 2 — Human–AI Co-Research",
                image: "/images/principle_co_research.png",
                content: [
                    "**Main Statement**: AI は人間を置き換える自動化ツールではなく、人間の認知を拡張する「研究パートナー」であるべきです。",
                    "**Why it matters**: <br/>• フル自動化は、方向性の喪失や理解不能な振る舞いを生みやすく、制御を失うリスクがあります。<br/>• Human–AI Co-Research では、人間が高いレベルの方向付けと価値判断を担い続けることで、研究と応用の両方を安全で意味のあるものに保ちます。",
                    "**Implementation**: EXITON AGI は、デュアルループ構造で動作します。<br/>• AI は高速な実験サイクル（分析 → 仮説生成 → 実験 → 反省）を回し、その結果を常に人間研究者にフィードバックします。<br/>• 人間はその結果を評価し、次の方向性や制約条件を設定します。"
                ]
            },
            {
                id: "local-intelligence",
                heading: "Principle 3 — Local Intelligence",
                image: "/images/principle_local.png",
                content: [
                    "**Main Statement**: フロンティア級の知能は、クラウド事業者だけの独占物であってはなりません。ユーザーの手元のマシンで動き、ユーザー自身のコントロール下にあるべきです。",
                    "**Why it matters**: <br/>• プライバシー・自律性・民主化の観点から、研究者や開発者は外部 API に依存せず、自分のツールとデータを自分で所有できる必要があります。<br/>• ローカル環境で動く構造化 AI は、そのための現実的な選択肢です。",
                    "**Implementation**: EXITON のアーキテクチャ（ContextOS × X-Mesh）は、コンシューマ向けハードウェアでの実行を前提として設計されています。<br/>12〜24GB クラスの GPU を搭載した一般的な PC 上で、強力な AGI エージェントが完全ローカルで動作することを目標としています。"
                ]
            }
        ]
    }
};
