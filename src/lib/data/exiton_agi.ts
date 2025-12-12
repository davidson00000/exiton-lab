export const exitonAgiContent = {
    en: {
        title: "EXITON AGI",
        tagline: "Towards a self-motivated AGI that can discover problems, design experiments, and improve itself.",
        intro: "EXITON AGI is our long-term research initiative to build a “self-motivated general intelligence” on top of the EXITON architecture stack: ContextOS (cognitive OS), LogicShield (validation layer), and X-Mesh (cooperative reasoning engine). Instead of treating LLMs as one-shot answer machines, EXITON AGI aims to create an autonomous research agent that can discover its own goals, plan experiments, run them, and improve over time while remaining interpretable and safe.",
        sections: [
            {
                heading: "Vision: Self-Motivated General Intelligence",
                content: [
                    "**Beyond one-shot answers**: EXITON AGI moves from “responding to prompts” to “running long-term research processes”. It should be able to maintain goals, track progress, and refine its own plans.",
                    "**Self-motivated loop**: The system continuously cycles through problem discovery, hypothesis generation, experiment design, execution, and reflection—without requiring humans to micromanage every step.",
                    "**Architectural transparency**: Instead of a single opaque giant model, EXITON AGI is built as a transparent architecture composed of small, inspectable components.",
                    "**Local-first**: Designed to eventually run on consumer-level hardware, enabling individual researchers to own and operate their own AGI instances."
                ]
            },
            {
                heading: "Architecture: EXITON AGI Stack",
                content: [
                    "1. **Cognitive OS Layer — ContextOS**\nManages tasks, state, and memory (SynapseVault L1/L2/L3). ContextOS acts as the “brainstem” and OS for EXITON AGI, orchestrating tools and agents over long time horizons.",
                    "2. **Validation Layer — LogicShield**\nProvides structural reliability: consistency checks, hallucination suppression, and safety constraints. LogicShield acts as the “internal auditor” of EXITON AGI.",
                    "3. **Reasoning Layer — X-Mesh**\nA cooperative reasoning engine that combines multiple small LLMs (Planner / Workers / Reviewer / Consensus) to achieve frontier-class reasoning.",
                    "4. **Self-Motivation Loop (AGI Layer)**\nOn top of these three layers, EXITON AGI adds a meta-loop that generates its own research agendas, prioritizes problems, schedules experiments via ContextOS, evaluates outcomes through LogicShield + X-Mesh, and updates its internal models and strategies."
                ]
            },
            {
                heading: "Core Research Questions",
                content: [
                    "- How can an AI autonomously discover meaningful problems instead of waiting for prompts?",
                    "- How should long-term goals, short-term tasks, and memory be structured so that the system remains stable and interpretable?",
                    "- How can we formally evaluate “self-motivation” without encouraging unsafe behavior?",
                    "- What is the right balance between model learning and architectural control?"
                ]
            },
            {
                heading: "Built on EXITON Core Projects",
                content: [
                    "EXITON AGI is not a separate system, but the synthesis of these three lines of research:",
                    "- **Logic Validator / LogicShield**: Provides the validation spine for EXITON AGI.",
                    "- **ContextOS**: Supplies the cognitive OS, memory, and task management.",
                    "- **X-Mesh**: Acts as the primary reasoning engine used inside the AGI loop."
                ]
            },
            {
                heading: "Roadmap",
                content: [
                    "**v0 – Conceptual Prototype**\nFormalize the EXITON AGI loop (problem discovery → experiment → reflection) and simulate the loop using existing LLMs with human-in-the-loop supervision.",
                    "**v1 – Local Research Agent**\nIntegrate ContextOS, LogicShield, and X-Mesh into a single agent that can run small research cycles on a local machine. Run internal benchmarks on code refactoring and experiment design.",
                    "**v2 – Semi-Autonomous Research Assistant**\nAllow EXITON AGI to propose its own micro-research projects within safe boundaries. Publish initial results and methodology (e.g., ICLR/NeurIPS Workshops).",
                    "**v3 – Self-Motivated Research System**\nFully automate the research loop for selected domains under safety constraints. Transition from “tool” to “collaborator” in human–AI co-research settings."
                ]
            },
            {
                heading: "Safety & Human Responsibility",
                content: [
                    "Humans remain responsible for final judgment and deployment.",
                    "EXITON AGI is designed for research and experimentation, not autonomous real-world control.",
                    "Human–AI Co-Research is a core principle: the system suggests and runs experiments, but humans decide what is meaningful and acceptable."
                ]
            }
        ],
        status: {
            heading: "Status & Get Involved",
            text: "Current status: Early-stage conceptual and architectural research, not yet implemented as a full system.",
            links: [
                { text: "Follow Research Notes", url: "/en/notes" },
                { text: "Contact for Collaboration", url: "/en/contact" }
            ]
        }
    },
    jp: {
        title: "EXITON AGI",
        tagline: "自ら課題を発見し、実験を設計し、自己改善する「自己目的的AGI」へ。",
        intro: "EXITON AGIは、ContextOS（認知OS）、LogicShield（検証層）、X-Mesh（協調推論エンジン）というEXITONアーキテクチャスタックの上に「自己目的的汎用知能（Self-Motivated General Intelligence）」を構築するための長期的な研究イニシアチブです。LLMを一回限りの回答マシンとして扱うのではなく、自らの目標を発見し、実験を計画・実行し、時間をかけて改善していく自律的な研究エージェントを目指します。",
        sections: [
            {
                heading: "Vision: Self-Motivated General Intelligence",
                content: [
                    "**Beyond one-shot answers**: 「プロンプトに答える」から「長期的な研究プロセスを実行する」への移行。目標を維持し、進捗を追跡し、自らの計画を洗練させる能力。",
                    "**Self-motivated loop**: 人間がすべてのステップを管理することなく、問題発見、仮説生成、実験設計、実行、省察のサイクルを自律的に回し続けます。",
                    "**Architectural transparency**: ブラックボックス化した単一の巨大モデルではなく、検証可能な小さなコンポーネントで構成された透明性の高いアーキテクチャ。",
                    "**Local-first**: 最終的には個人の研究者が自身のAGIインスタンスを所有・運用できるよう、民生用ハードウェアで動作するように設計します。"
                ]
            },
            {
                heading: "Architecture: EXITON AGI Stack",
                content: [
                    "1. **Cognitive OS Layer — ContextOS**\nタスク、状態、メモリ（SynapseVault L1/L2/L3）を管理します。ContextOSは「脳幹」およびOSとして機能し、長期にわたってツールやエージェントを指揮します。",
                    "2. **Validation Layer — LogicShield**\n構造的な信頼性（一貫性チェック、ハルシネーション抑制、安全性制約）を提供します。LogicShieldはEXITON AGIの「内部監査役」として機能します。",
                    "3. **Reasoning Layer — X-Mesh**\n複数の小型LLM（Planner / Workers / Reviewer / Consensus）を組み合わせ、Frontierクラスの推論を実現する協調推論エンジンです。",
                    "4. **Self-Motivation Loop (AGI Layer)**\nこれら3層の上に、独自の研究課題を生成し、優先順位をつけ、ContextOS経由で実験をスケジュールし、LogicShieldとX-Meshで結果を評価し、内部モデルと戦略を更新する「メタ・ループ」を追加します。"
                ]
            },
            {
                heading: "Core Research Questions",
                content: [
                    "- どのようにしてAIは、プロンプトを待つことなく自律的に有意義な問題を発見できるのか？",
                    "- システムの安定性と解釈可能性を保つために、長期目標、短期タスク、メモリをどう構造化すべきか？",
                    "- 安全でない振る舞いを助長せずに「自己動機付け」を形式的に評価するにはどうすればよいか？",
                    "- モデルの学習とアーキテクチャによる制御の適切なバランスはどこにあるか？"
                ]
            },
            {
                heading: "Built on EXITON Core Projects",
                content: [
                    "EXITON AGIは単独のシステムではなく、以下3つの研究ラインの統合です:",
                    "- **Logic Validator / LogicShield**: EXITON AGIの信頼性の背骨を提供します。",
                    "- **ContextOS**: 認知OS、メモリ、タスク管理を提供します。",
                    "- **X-Mesh**: AGIループ内で主要な推論エンジンとして機能します。"
                ]
            },
            {
                heading: "Roadmap",
                content: [
                    "**v0 – Conceptual Prototype**\nEXITON AGIループ（問題発見→実験→省察）の形式化、およびHuman-in-the-loopによる既存LLMを用いたシミュレーション。",
                    "**v1 – Local Research Agent**\nContextOS、LogicShield、X-Meshを統合し、ローカルマシン上で小規模な研究サイクルを回せる単一エージェントを構築。コードリファクタリングや実験設計での内部ベンチマーク実施。",
                    "**v2 – Semi-Autonomous Research Assistant**\n安全な境界内で、AGIが自らマイクロ研究プロジェクトを提案できるようにする。初期の成果と手法を公開（ICLR/NeurIPS Workshop等）。",
                    "**v3 – Self-Motivated Research System**\n特定のドメインにおいて、安全性制約の下で研究ループを完全自動化。「ツール」から人間とAIの共同研究における「コラボレーター」へと移行。"
                ]
            },
            {
                heading: "Safety & Human Responsibility",
                content: [
                    "最終的な判断とデプロイの責任は常に人間が持ちます。",
                    "EXITON AGIは研究・実験用であり、自律的な実世界制御（Autonomous Control）を目的とはしていません。",
                    "Human–AI Co-Researchが核となる原則です。システムは実験を提案・実行しますが、何が有意義で許容可能かを決定するのは人間です。"
                ]
            }
        ],
        status: {
            heading: "Status & Get Involved",
            text: "現在のステータス: 初期の概念・アーキテクチャ研究段階であり、完全なシステムとしては未実装です。",
            links: [
                { text: "Research Notes を読む", url: "/jp/notes" },
                { text: "共同研究の問い合わせ", url: "/jp/contact" }
            ]
        }
    }
};
