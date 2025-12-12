export const xMeshContent = {
    en: {
        title: "X-Mesh",
        subtitle: "A cooperative reasoning engine built from multiple small LLMs, designed to rival GPT-5.1/Gemini-class Frontier Models through structure, not parameter count.",
        overview: "X-Mesh is EXITON Lab’s next-generation reasoning engine that combines multiple small LLMs/SLMs into a coordinated multi-agent system. Using Planner–Worker–Reviewer roles, consensus reasoning, and SynapseVault memory hierarchy, X-Mesh aims to outperform Frontier-scale models in decomposition reasoning, code transformation, and multi-document synthesis.",
        sections: [
            {
                heading: "Vision",
                content: [
                    "**Structure beats Parameter**: We challenge the dogma that 'bigger is better'. By intelligently orchestrating multiple 7B-class models, we achieve reasoning capabilities that arguably surpass single 70B+ models.",
                    "**Local Intelligence**: Designed to run on consumer hardware or edge devices, democratizing access to frontier-class reasoning.",
                    "**Cooperative Reasoning**: Inspired by human organizations, X-Mesh employs a division of labor where specialized agents debate, critique, and refine answers before final output."
                ]
            },
            {
                heading: "Architecture",
                content: [
                    "The X-Mesh architecture mimics a small research team:",
                    "- **Planner**: Decomposes complex queries into sub-tasks and dependency graphs.",
                    "- **Workers**: Specialized instances (Coder, Writer, Analyst) that execute sub-tasks in parallel.",
                    "- **Reviewer**: A critical agent that checks Worker outputs against the original requirements and logic constraints (LogicShield integration).",
                    "- **Consensus Module**: Aggregates outputs and resolves conflicts to form a coherent final answer.",
                    "- **SynapseVault**: A shared memory hierarchy handling short-term task context and long-term knowledge retrieval."
                ]
            },
            {
                heading: "Why X-Mesh Matters",
                content: [
                    "Frontier models are powerful but monolithic and opaque. X-Mesh offers a transparent, modular alternative.",
                    "- **Stability**: Multi-agent consensus drastically reduces hallucination rates compared to single-shot generation.",
                    "- **Long-context Logic**: By breaking down tasks, X-Mesh handles complex, multi-step reasoning chains that often confuse standard LLMs.",
                    "- **Code Transformation**: Specialized optimization for refactoring and architectural updates, not just snippet generation."
                ]
            },
            {
                heading: "Benchmark Goals",
                content: [
                    "We are developing a rigorous 30-question Internal Benchmark to measure:",
                    "- **Reasoning Accuracy**: Logic puzzle solving rate.",
                    "- **Stability**: Consistency across multiple runs.",
                    "- **Code Correctness**: Unit test pass rates for generated code.",
                    "- **Multi-document Integration**: Accuracy in synthesizing information from 5+ disparate sources."
                ]
            },
            {
                heading: "Roadmap",
                content: [
                    "**v0**: Proof-of-Concept. Implementation of Planner/Worker/Reviewer minimal loop.",
                    "**v1**: Integration of SynapseVault (L2/L3 memory) and full LogicShield support.",
                    "**v2**: Public release of the 'Frontier-Challenge' benchmark and technical paper (targeting ICLR/NeurIPS Workshops).",
                    "**v3**: Integration into the core of EXITON AGI system."
                ]
            }
        ],
        download: {
            heading: "Get Involved",
            text: "The X-Mesh source code will be made available on GitHub.",
            linkText: "View on GitHub",
            url: "https://github.com/davidson00000/exiton-lab"
        }
    },
    jp: {
        title: "X-Mesh",
        subtitle: "A cooperative reasoning engine built from multiple small LLMs, designed to rival GPT-5.1/Gemini-class Frontier Models through structure, not parameter count.",
        overview: "X-Mesh は、小型LLM/SLMを複数協調させることで、GPT-5.1 / Gemini 3.0 に匹敵する推論性能を “構造” によって実現する EXITON Lab の次世代推論エンジンです。Planner–Worker–Reviewer の役割分担と合議形成、SynapseVault メモリを活用し、多段推論・コード修正・文書統合などで Frontier モデルを超えることを目指します。",
        sections: [
            {
                heading: "Vision",
                content: [
                    "**Structure beats Parameter**: 「巨大＝最強」というドグマへの挑戦です。複数の 7B クラスモデルを高度に連携させることで、単体の 70B+ モデルをも凌駕する推論能力の獲得を目指します。",
                    "**Local Intelligence**: 個人の開発環境やエッジデバイスでも動作可能な「手の届く Frontier 知能」を実現します。",
                    "**Cooperative Reasoning**: 人間の組織論に着想を得て、専門化されたエージェント同士が議論・批判・洗練を行うことで、単独では到達できない精度を実現します。"
                ]
            },
            {
                heading: "Architecture",
                content: [
                    "X-Mesh のアーキテクチャは、小規模な研究チームを模倣しています:",
                    "- **Planner**: 複雑なクエリをサブタスクと依存関係グラフに分解します。",
                    "- **Workers**: コーダー、ライター、アナリストなど、タスクに特化したワーカーが並列で実行します。",
                    "- **Reviewer**: ワーカーの出力を要件や論理制約と照らし合わせ、厳しく批判・検証します（LogicShield 統合）。",
                    "- **Consensus Module**: 複数の出力を統合し、矛盾を解消して最終回答を形成します。",
                    "- **SynapseVault**: タスクごとの短期記憶と、長期的な知識検索を管理する共有メモリ階層です。"
                ]
            },
            {
                heading: "Why X-Mesh Matters",
                content: [
                    "Frontier モデルは強力ですが、巨大でブラックボックスです。X-Mesh は透明性が高く、モジュール化された代替案を提示します。",
                    "- **安定性**: マルチエージェントによる合議制は、一発生成に比べてハルシネーションを劇的に低減させます。",
                    "- **長文論理**: タスク分解により、通常の LLM が苦手とする長く複雑な論理連鎖を安定して処理できます。",
                    "- **コード修正**: 単なるスニペット生成ではなく、リファクタリングやアーキテクチャ全体の更新に特化しています。"
                ]
            },
            {
                heading: "Benchmark Goals",
                content: [
                    "GPT-5.1 / Gemini 3 / SLM / X-Mesh を比較する、厳格な「30問ベンチマーク」を策定中です:",
                    "- **推論精度**: 論理パズルの正答率。",
                    "- **安定性**: 複数回実行時の回答の一貫性。",
                    "- **コード正当性**: 生成コードの単体テスト通過率。",
                    "- **文書統合**: 5つ以上の異なるソースからの情報統合精度。"
                ]
            },
            {
                heading: "Roadmap",
                content: [
                    "**v0**: 概念実証。Planner/Worker/Reviewer の最小ループの実装。",
                    "**v1**: SynapseVault (L2/L3 メモリ) の統合および LogicShield の完全統合。",
                    "**v2**: 'Frontier-Challenge' ベンチマークの公開、および技術論文の発表 (ICLR/NeurIPS Workshop 目標)。",
                    "**v3**: EXITON AGI コアシステムへの統合。"
                ]
            }
        ],
        download: {
            heading: "Get Involved",
            text: "X-Mesh のソースコードは GitHub にて公開予定です。",
            linkText: "View on GitHub",
            url: "https://github.com/davidson00000/exiton-lab"
        }
    }
};
