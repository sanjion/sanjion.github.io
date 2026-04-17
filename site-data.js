// 直接修改这个文件里的内容，就可以把模板替换成你自己的主页信息。
const siteData = {
  profile: {
    eyebrow: "Academic Homepage",
    name: "Rongxin Gao",
    localName: "高荣鑫",
    photo: "assets/image.jpg",
    intro: [
      "I am pursuing my master's degree in <a href=\"https://iai.xmu.edu.cn/\" target=\"_blank\" rel=\"noreferrer noopener\">Institute of Artificial Intelligence</a> at <a href=\"https://www.xmu.edu.cn/\" target=\"_blank\" rel=\"noreferrer noopener\">Xiamen University</a>, advised by <a href=\"https://scholar.google.com/citations?user=k5hVBfMAAAAJ&hl=zh-CN\" target=\"_blank\" rel=\"noreferrer noopener\">Prof. Xinghao Ding</a> and <a href=\"https://huangyue05.github.io/\" target=\"_blank\" rel=\"noreferrer noopener\">Prof. Yue Huang</a>. My long-term research goal is to develop embodied agents that are fundamentally grounded in the dynamic physical world, progressing from 4D scene modeling and multimodal dynamic reasoning toward agents capable of robust planning and action in open-ended, long-horizon real-world environments.",
    ],
    focusAreas: [
      "<strong>4D World Modeling &amp; Perception:</strong> Dynamic scene reconstruction, spatio-temporal understanding, streaming vision for embodied 4D perception.",
      "<strong>Multimodal LLM Evaluation &amp; Adaptation:</strong> Benchmarking MLLMs on dynamic reasoning, task-specific fine-tuning for spatial and temporal understanding.",
    ],
    contactLine:
      "Email: rongxingao38@gmail.com | WeChat: sanjion9 | Location: Xiamen, China",
    links: [
      { label: "Email", url: "mailto:rongxingao38@gmail.com" },
      { label: "Google Scholar", url: "https://scholar.google.com/" },
      { label: "GitHub", url: "https://github.com/sanjion" },
    ],
  },
  sections: {
    worksTitle: "Selected Work",
    worksNote: "*Equal contribution, \u2020 Project Leader",
    experienceTitle: "Selected Experience",
    interestsTitle: "Beyond Work",
  },
  works: [
    {
      title: "DynTrace: Tracking Dynamic Object Evidence for 4D Spatio-Temporal Reasoning in MLLMs",
      titleUrl: "https://sanjion.github.io/DynTrace/",
      authors:
        "Rongxin Gao, Yuzhi Huang, Dongxuan Liu, Chu Li, Zhenye Wang, Jie Wu, Shuzhao Xie, Jingyan Jiang, Xinghao Ding, Xiaotong Tu, Yue Huang",
      authorsHtml:
        "<u>Rongxin Gao</u><sup>*</sup>, Yuzhi Huang<sup>*\u2020</sup>, Dongxuan Liu<sup>*</sup>, Chu Li, Zhenye Wang, Jie Wu, Shuzhao Xie, Jingyan Jiang, Xinghao Ding, Xiaotong Tu, Yue Huang",
      venue: "Manuscript, 2026",
      description:
        "A training-free framework for 4D spatio-temporal reasoning that supplies MLLMs with continuously tracked dynamic object evidence through Dynamic Trajectory Visualization and a Dynamic Trace Graph.",
      image: "assets/works/dyntrace.png",
      imageLabel: "DynTrace",
      links: [
        { label: "Project", url: "https://sanjion.github.io/DynTrace/" },
        { label: "Paper", url: "#" },
        { label: "Code", url: "#" },
      ],
    },
    {
      title:
        "Thinking in Dynamics: How Multimodal Large Language Models Perceive, Track, and Reason Dynamics in Physical 4D World",
      titleUrl: "https://dyn-bench.github.io/",
      authors:
        "Yuzhi Huang, Kairun Wen, Rongxin Gao, Dongxuan Liu, Yibin Lou, Jie Wu, Jing Xu, Jian Zhang, Zheng Yang, Yunlong Lin, Chenxin Li, Panwang Pan, Junbin Lu, Jingyan Jiang, Xinghao Ding, Yue Huang, Zhi Wang",
      authorsHtml:
        "Yuzhi Huang<sup>*\u2020</sup>, Kairun Wen<sup>*</sup>, <u>Rongxin Gao</u><sup>*</sup>, Dongxuan Liu, Yibin Lou, Jie Wu, Jing Xu, Jian Zhang, Zheng Yang, Yunlong Lin, Chenxin Li, Panwang Pan, Junbin Lu, Jingyan Jiang, Xinghao Ding, Yue Huang, Zhi Wang",
      venue: "CVPR 2026",
      description:
        "A large-scale benchmark and analysis framework for evaluating how MLLMs perceive, track, and reason about dynamic content in the physical 4D world, covering object motion, evolving scenes, and camera-object interactions.",
      image: "assets/works/dynbench.png",
      imageLabel: "Dyn-Bench",
      links: [
        { label: "Project", url: "https://dyn-bench.github.io/" },
        { label: "Paper", url: "https://arxiv.org/abs/2603.12746" },
        { label: "Code", url: "https://github.com/Dynamics-X/Thinking-in-Dynamics" },
        { label: "Dataset", url: "https://huggingface.co/datasets/yu2hi13/Dyn-Bench" },
      ],
    },
  ],
  experiences: [
    "<strong>Shanghai Artificial Intelligence Laboratory</strong>: Large Language Model Fine-Tuning, AI Agent;",
  ],
  interests: [
    {
      title: "Research Taste",
      description:
        "I am especially interested in video understanding, multimodal reasoning, structured representations, and physically grounded AI.",
    },
    {
      title: "Open Problems",
      description:
        "I care about how models keep temporal coherence, track dynamic entities reliably, and connect perception to higher-level reasoning.",
    },
  ],
};
