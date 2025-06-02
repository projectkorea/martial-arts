import { MBTIType, MBTIResult } from '@/types/mbti';
import { getAssetPath } from './assets';

export const MBTI_RESULTS: Record<string, MBTIResult> = {
  "ENFJ": {
    title: "태극권",
    mbti: "ENFJ",
    quote: "부드러움은 강함을 이기지요.",
    explanation: [
      "세계에서 가장 많은 수련생을 보유하고 있는 무술입니다.",
      "겉으론 부드러워 보이지만, 내면은 아주 단단한 '겉촉속바'같은 당신에게는 태극권이 가장 잘 어울립니다."
    ],
    additionalInfo: [
      "상대와 나를 연결하여 그 힘에 맞춥니다. 그리고 그 느낌대로, 나를 변화시키며 상대를 압도합니다.",
      "상대에게 파고들어 공격과 방어하는 상황이 많습니다. 따라서 상대에게 밀착하는 능력이 가장 중요합니다.",
      "태극권의 신비주의적인 이미지 때문에 사기꾼들이 굉장히 많으니 조심하세요.",
      "유명인: 무우양, 양노선, 이연걸(태극장삼풍), 박해일(경주), 김하온(타이치 메디테이션)"
    ],
    imageUrl: "/images/taichi.jpg",
    bestPartner: {
      type: "INFP",
      title: "팔괘장",
      imageUrl: "/images/baguazhang.jpg"
    },
    worstPartner: {
      type: "ESTP",
      title: "종합격투기",
      imageUrl: "/images/mma.jpg"
    },
  },
  
  "ENFP": {
    title: "카포에라",
    mbti: "ENFP",
    quote: "살짝 미치면, 인생은 즐거워진다.",
    explanation: [
      "역동성과 파괴성으로 무장한 브라질 전통 무술입니다.",
      "각종 회전 동작과 덤블링을 이용한 화려한 동작의 예술성과 흥겨운 분위기는 그 어떤 무술도 흉내낼 수 없습니다."
    ],
    additionalInfo: [
      "몸의 회전력을 이용하여 공중기나 발차기 등을 사용하며, 움직임이 워낙 예측불허이며, 주로 공격이 아래쪽에서 올라오기 때문에 막기도 무척 까다롭습니다.",
      "하지만 엄청난 체력을 소모하며 동작들이 너무 크고 느려 순수하게 격투기로 사용하긴 힘듭니다. 경기가 끝날 때까지 계속 그런 식으로 움직일 수 있다면 현존하는 가장 강력한 무술이 될 수 있긴 합니다.",
      "단숨에 무대 위로 올라가 끊임없이 몸을 흔드는 자유로운 영혼의 소유자인 당신에게 카포에라가 가장 잘 어울립니다.",
      "유명인: 네권, 에디(철권), 루시우(오버워치), 김무열, 진선규"
    ],
    imageUrl: "/images/capoeira.jpg",
    bestPartner: {
      type: "INTJ",
      title: "아이키도",
      imageUrl: "/images/aikido.jpg"
    },
    worstPartner: {
      type: "ESTJ",
      title: "레슬링",
      imageUrl: "/images/wrestling.jpg"
    }
  },
  
  "ENTJ": {
    title: "크라브마가",
    mbti: "ENTJ",
    quote: "전 세계 특수부대가 인정한 실전 최강무술",
    explanation: [
      "군용 격투기로 사용됩니다. 무자비하게 실용적입니다.",
      "생존과 살상이 목적입니다. 눈, 코, 목, 사타구니 등 엄청난 고통을 주는 곳에 집중하며, 죽을 수 있는 급소들을 노립니다. 이들은 로우불로나 뼈를 부수는 건 식은 죽 먹기 입니다."
    ],
    additionalInfo: [
      "무기를 든 상대에게 대적할 수 있는 가장 효과적인 무술입니다.",
      "일대다 상황, 소위 다굴당하는 상황에서 전세를 뒤집는 것이 주된 목적입니다.",
      "오랜 시간을 요하는 심오함 따위는 집어치우고, 최대한 빨리 익혀서 효과적으로 써먹을 수 있는 단순 명료함을 추구합니다.",
      "전략적인 사고와 빠른 판단력, 민첩성과 정확성으로 무장한 당신은 크라브마가가 가장 잘 어울리며, 그 누구도 감히 도전장을 내밀지 못할 것입니다.",
      "유명인: 이미 리치텐필드, 이스라엘 군경찰, 리암 니슨(테이큰) 원빈(아저씨), 김명화"
    ],
    imageUrl: "/images/kravmaga.jpg",
    bestPartner: {
      type: "INTP",
      title: "펜싱",
      imageUrl: "/images/fencing.jpg"
    },
    worstPartner: {
      type: "ESFP",
      title: "우슈",
      imageUrl: "/images/wushu.jpg"
    }
  },

  "ENTP": {
    title: "주짓수",
    mbti: "ENTP",
    quote: "힘을 쓰게되면 지친다. 지치면 너는 죽는다.",
    explanation: [
      "관절을 꺾고 조르는 그래플링 위주 무술입니다.",
      "짧은 역사에도 불구하고 탁월한 실전성을 인정받아, 발전 속도가 어마무시합니다."
    ],
    additionalInfo: [
      "힘보단 기술을 강조하며, 지렛대의 원리를 활용하여 막강한 위력을 뽐냅니다.",
      "아무리 세계급 강자일지라도, 주짓수에 대한 이해가 없다면, 흰 띠 시절에 배우는 초급 기술로도 꼼짝달싹하지 못하게 제압할 수 있습니다.",
      "특히 힘이 약하거나 체구가 작은 사람이 주짓수를 배운다면 가장 강력한 위력을 갖게 될 것입니다.",
      "틀에 갇히지 않는 자유분방한 사고를 지닌 당신에게 주짓수가 가장 잘 어울립니다.",
      "유명인: 그레이시 가문, 에리히 란, 데미안 마이아, 안드레 갈벙, 마르셀로 가르시아, 레안드로 로, 파울로 미야오, 니나(철권)"
    ],
    imageUrl: "/images/jiujitsu.jpg",
    bestPartner: {
      type: "INTJ",
      title: "양궁",
      imageUrl: "/images/archery.jpg"
    },
    worstPartner: {
      type: "ESFJ",
      title: "태권도",
      imageUrl: "/images/taekwondo.png"
    }
  },

  "ESFJ": {
    title: "태권도",
    mbti: "ESFJ",
    quote: "국뽕은 내가 책임진다. 전 세계가 사랑하는 국민 스포츠",
    explanation: [
      "그 어떤 무술과 비교해봐도 발차기 기술을 따라올 자는 없습니다. 단연 1등입니다.",
      "발차기는 펀치에 비해 2-3배 이상의 파괴력을 선보이며, 특히 회전에 의한 파괴력 최대 1톤의 파괴력을 자랑합니다."
    ],
    additionalInfo: [
      "하지만 온몸을 모두 사용해 체력 소모가 크다는 점, 동작이 커 속도가 느리다는 점 때문에 실전에서는 그다지 유용하지는 않습니다.",
      "화려하고 휘황찬란한 발차기, 특히 900도 발차기와 같은 매력적인 기술 덕분에 공연 퍼포먼스로써 이미 위상을 높인지 오래입니다.",
      "천성적으로 사교적이며, 주목 받는 것을 좋아하는 인기쟁이인 당신에게 태권도가 가장 잘 어울립니다.",
      "유명인: 김경훈, 김제경, 김소희, 손태진, 이동준, 오혜리, 이대훈, 차동민, 임수정, 브렌, K-Tigers"
    ],
    imageUrl: "/images/taekwondo.png",
    bestPartner: {
      type: "ISFP",
      title: "검도",
      imageUrl: "/images/kendo.jpg"
    },
    worstPartner: {
      type: "ENTJ",
      title: "주짓수",
      imageUrl: "/images/jiujitsu.jpg"
    }
  },
  
  "ESTJ": {
    title: "레슬링",
    mbti: "ESTJ",
    quote: "잡히면, 죽는다.",
    explanation: [
      "MMA의 필수과목 중 가장 승률이 좋습니다.", 
      "원하는 상황을 순간적으로 강제할 수 있습니다. 강력한 클린치, 테이크 다운, 태클을 통해 우위를 점합니다."
    ],
    additionalInfo: [
      "레슬링은 상대의 타격기를 제압할때도 매우 효과적입니다. 레슬러가 태클이나 클린치로 붙어버리면 타격을 하는건 불가능에 가깝습니다.",
      "레슬링의 강력함을 인정한 미국을 비롯한 각국의 군과 경찰에서 범죄자 검거나 상대방 제압을 위한 훈련과목으로 채택하기도 합니다.",
      "굳은 의지, 확실한 질서 고집, 주변 상황을 정확히 판단하는 당신에게는 레슬리이 가장 잘 어울립니다. 레슬링을 통해 당신의 위풍당당한 지배력과 의지력을 표출해보세요.",
      "유명인: 심권호, 더 락, 언더테이커, 존 시나, 브록 레스너, 스티븐 오스틴, 빅쇼, 커트 앵글"
    ],
    imageUrl: "/images/wrestling.jpg",
    bestPartner: {
      type: "ISTP",
      title: "복싱",
      imageUrl: "/images/boxing.jpg"
    },
    worstPartner: {
      type: "ENFP",
      title: "카포에라",
      imageUrl: "/images/capoeira.jpg"
    }
  },

  "ESFP": {
    title: "우슈",
    mbti: "ESFP",
    quote: "화려한 공작새. 강력함보단, 화려함을 추구한다",
    explanation: [
      "몸을 크게 뻗으면서 신속하게 움직이는 무술입니다.",
      "누군과 싸워서 이기는 것보다는, 혼자서 예술적인 아름다움을 추구하는 무술입니다."
    ],
    additionalInfo: [
      "다이내믹하고 아름다운 기술이 많습니다.",
      "부드럽고 느긋하며 매끄러운 움직임을 추구하기 때문에 신체의 리듬을 타는 것이 매우 중요합니다.",
      "유엽도라 불리는 화려하고 가벼운 낭창낭창 잘 휘어지는 도를 사용하여 화려한 기술을 보여주기도 합니다.",
      "순간의 감정에 충실하며 절대 매력을 지닌 당신에게 우슈가 가장 잘 어울립니다. 우슈를 통해 당신의 천부적인 스타성 기질을 즐겨보세요. 어딜가나 스포트라이트가 쏟아질 것입니다!",
      "유명인: 우빈, 제트 리, 도니 엔, 우징, 레이 파크, 스티브 콜먼, 존 푸, 옥수, 이하성"
    ],
    imageUrl: "/images/wushu.jpg",
    bestPartner: {
      type: "ISFJ",
      title: "합기도",
      imageUrl: "/images/hapkido.jpg"
    },
    worstPartner: {
      type: "ENTJ",
      title: "크라브마가",
      imageUrl: "/images/kravmaga.jpg"
    }
  },

  "ESTP": {
    title: "종합격투기",
    mbti: "ESTP",
    quote: "강력함 끝판왕. 현대 무술의 총합체",
    explanation: [
      "어떤 무술과 싸워도 절대 패배하지 않습니다.",
      "4대 격투기(무에타이, 복싱, 주짓수, 레슬링)을 기반두고 있어 현존 무술중 가장 강력합니다."
    ],
    additionalInfo: [
      "특히 길거리에서 무조건 맨손으로 싸웠을 때, 가장 극한의 효율을 보여줍니다. MMA가 가장 강력하고 효율적인 것은 이는 이미 수많은 사례를 통해 검증된 엄연한 팩트입니다.",
      "몸으로 부딪혀 해결해 나가며, 적응력, 즉흥성, 전술적인 플레이가 필요한 종합격투기에 도전해보세요!",
      "벼랑 끝의 아슬아슬한 삶을 즐기며, 위험한 행동을 일삼는 폭풍같은 당신과 종합격투기와 잘 어울립니다.",
      "유명인: 코너 맥그리거, 하빕 누르마고메도프, 프란시스 은가누, 김동현, 이스라엘 안데사야, 앤더슨 실바, 존 존스, 정찬성"
    ],
    imageUrl: "/images/mma.jpg",
    bestPartner: {
      type: "ISTJ",
      title: "유도",
      imageUrl: "/images/judo.jpg"
    },
    worstPartner: {
      type: "ENFJ",
      title: "태극권",
      imageUrl: "/images/taichi.jpg"
    }
  },

  "INFJ": {
    title: "아이키도",
    mbti: "INFJ",
    quote: "성인군자 등장이오. 무술도 관대해질 수 있는 법",
    explanation: [
      "공격보다는 방어 위주의 무술입니다.",
      "아이키도는 단순하게 결투에서 이기는 것을 목표로 두지 않습니다."
    ],
    additionalInfo: [
      "상대방의 무게 중심을 손쉽게 무력화하는 방법을 극한으로 파고들어, 그 원리를 전문적으로 탐구합니다.",
      "상대를 제압할 때 신체적 고통의 강도를 조절할 수 있으며, 상대를 다치지 않게 제압하는 관대한 무술입니다.",
      "무기를 휘두루는 상대에게 효과적으로 대처하는 호신술적인 측면이 강합니다.",
      "이상적인 해결책을 결단력있게 실행하는 당신은 인류에게 긍정적인 영향을 미치고자 하는 무술인 아이키도가 제격입니다.",
      "유명인: 우에시바 모리헤이, 시오다 고조, 도미키 켄지, 스티븐 시걸, 카자마 준(철권), 존 윅(존 윅), 피터 롤스턴"
    ],
    imageUrl: "/images/aikido.jpg",
    bestPartner: {
      type: "ENFP",
      title: "카포에라",
      imageUrl: "/images/capoeira.jpg"
    },
    worstPartner: {
      type: "ISTP",
      title: "복싱",
      imageUrl: "/images/boxing.jpg"
    }
  },

  "INFP": {
    title: "팔괘장",
    mbti: "INFP",
    quote: "팔괘. 64장.",
    explanation: [
      "격투기 종목 중 유일하게 손바닥을 주무기로 하는 고급 무술입니다.",
      "최악의 상황이나 악한 사람에게서도 좋은 면만을 바라보는 특출난 재능을 가진 당신은 팔괘장이 가장 잘 어울립니다."
    ],
    additionalInfo: [
      "끊임없이 움직이며, 중심을 잡고 방향을 변화시키며 회피적이고 자기 방어적 특징이 매우 강합니다.",
      "상대와 정면으로 맞서지 않고, 항상 사각지대를 찾아 공격하는 영활한 몸놀림이 필요합니다.",
      "직선과 곡선을 그리며 움직이는 보통 무술과는 달리, 원을 중심으로 움직이는 특이한 방식을 선택하고 있습니다.",
      "유명인: 동해천, 노수전, 노수덕, 박복남, 정정화, 안철균, 나루토 휴우가 네지"
    ],
    imageUrl: "/images/baguazhang.jpg",
    bestPartner: {
      type: "ENFJ",
      title: "태극권",
      imageUrl: "/images/taichi.jpg"
    },
    worstPartner: {
      type: "ISTJ",
      title: "유도",
      imageUrl: "/images/judo.jpg"
    }
  },

  "INTJ": {
    title: "양궁",
    mbti: "INTJ",
    quote: "바람은 나에게만 부는 것이 아니다. 나만 집중하면 된다.",
    explanation: [
      "전쟁에서 모든 나라가 원거리 공격 무기로 사용하던 궁술을 스포츠한 종목입니다.",
      "단일 대상 목표로 하며, 짧은 시간안에 엄청난 집중력을 요구합니다."
    ],
    additionalInfo: [
      "컨디셔닝의 중요도가 낮기 때문에, 다른 종목보다 신체조건이 중요하진 않지만, 그만큼 우월한 정신력과 섬세한 컨트롤이 뒷받침되어야 합니다.",
      "비록 양궁이 격투기 종목은 아니지만, 전략적 사고에 능한 당신은 좋은 도구를 놔두고 맨몸을 사용하는 어리석은 행동을 도저히 못견뎌해합니다.",
      "놀랄 만큼 호기심이 많으며 쓸데없는데 에너지를 낭비하지 않는 당신에게 양궁이 가장 잘 어울립니다.",
      "유명인: 기보배, 구본찬, 김수녕, 박경모, 박성현, 윤미진, 이승윤, 장혜진, 최미선, 최현주, 애쉬(롤), 로빈 후드"
    ],
    imageUrl: "/images/archery.jpg",
    bestPartner: {
      type: "ENTJ",
      title: "주짓수",
      imageUrl: "/images/jiujitsu.jpg"
    },
    worstPartner: {
      type: "ISFP",
      title: "검도",
      imageUrl: "/images/kendo.jpg"
    }
  },

  "INTP": {
    title: "펜싱",
    mbti: "INTP",
    quote: "준비된 자만이, 기회를 잡는다",
    explanation: [
      "순간적으로 공방을 주고받는 치열한 심리전 위주의 스포츠입니다.",
      "간격 조절과 몸의 밸런스가 어떤 종목보다도 매우 중요합니다."
    ],
    additionalInfo: [
      "앞으로 너무 뻗어 공격하면 방어할 수 없고, 몸을 너무 숙이면 등에 칼을 맞을 수 있습니다.",
      "오로지 손목만을 움직여서 방어하는 것이 경직도 없고 빠르며 효과적입니다.",
      "조금도 쉬지 않고 생각에 몰두하는 혁신적인 당신에게 펜싱이 가장 잘 어울립니다.",
      "유명인: 토마스 바흐, 브리스 귀야르, 구본길, 김영호, 김정환, 김지연, 남현희, 박상영, 신아람"
    ],
    imageUrl: "/images/fencing.jpg",
    bestPartner: {
      type: "ENTJ",
      title: "크라브마가",
      imageUrl: "/images/kravmaga.jpg"
    },
    worstPartner: {
      type: "ISFJ",
      title: "합기도",
      imageUrl: "/images/hapkido.jpg"
    }
  },

  "ISFJ": {
    title: "합기도",
    mbti: "ISFJ",
    quote: "나는 너만 지키면 돼. 딜도 되고, 탱도 되는 서포터",
    explanation: [
      "주로 상대의 공격에 대응하여 반격하는 종합 호신 무술입니다.",
      "사람들이 자주 가지고 다닐 법한 도구뿐만아니라, 부채, 몽둥이, 지팡이, 단봉, 밧줄, 사슬, 채찍, 표창의 무기술도 수련하고 있습니다."
    ],
    additionalInfo: [
      "힘의 순환, 에너지 조정 방법을 심도있게 다룹니다.",
      "합기도 자체의 무술은 그다지 실전적이진 않습니다.",
      "하지만 쌍절곤, 봉술과 같은 다채로운 무기술을 사용하며 호신 무술로써 위상을 드높이고 있습니다.",
      "소중한 사람들을 끝까지 지키는 수호자와 같은 당신에게 합기도가 가장 잘 어울립니다.",
      "유명인: 김윤상, 최용술, 김남재"
    ],
    imageUrl: "/images/hapkido.jpg",
    bestPartner: {
      type: "ESFP",
      title: "우슈",
      imageUrl: "/images/wushu.jpg"
    },
    worstPartner: {
      type: "INTP",
      title: "펜싱",
      imageUrl: "/images/fencing.jpg"
    }
  },

  "ISFP": {
    title: "검도",
    mbti: "ISFP",
    quote: "검과 몸은 하나. 나의 검은 당신의 것이오.",
    explanation: [
      "호신용으로 검도를 배울 생각은 안 하는 게 좋습니다. 폭행이 아니라 살인으로 죄질이 격상될 수 있기 때문입니다.",
      "무기술은 복싱, 태권도, 주짓수 같은 맨손 무술과는 비교도 안 될 정도로 상대에게 치명적일 수가 있습니다."
    ],
    additionalInfo: [
      "맨손 무술은 어지간히 실력 차이나 체급 차이가 나지 않으면 치명적인 부상을 입히기 쉽지 않습니다. 그러나 검도를 배운 사람이 쇠파이프나 목검 등을 들고 사람을 팼다가는 한 번의 공격만으로도 작게는 중상, 크게는 사망에 이를 수 있습니다.",
      "검술 수련 방법인 격검을 스포츠화시킨 일본 무기술입니다.",
      "호기심이 많으면서 번개와 같은 즉각적인 반응이 가능한 당신에게 검도가 가장 잘 어울립니다.",
      "유명인: 김경남, 강상훈, 모치다 모리지, 니시카와 키요노리, 후루가와 가즈오, 에이가 나오키, 명탐정 코난 핫토리 헤이지, 갓 오브 하이스쿨 유미라"
    ],
    imageUrl: "/images/kendo.jpg",
    bestPartner: {
      type: "ESFJ",
      title: "태권도",
      imageUrl: "/images/taekwondo.png"
    },
    worstPartner: {
      type: "INTJ",
      title: "양궁",
      imageUrl: "/images/archery.jpg"
    }
  },

  "ISTJ": {
    title: "유도",
    mbti: "ISTJ",
    quote: "생각하는 순간, 바로 내동댕이쳐진다.",
    explanation: [
      "상대방의 힘을 빼앗아 나의 힘으로 만드는 막강한 무술입니다.",
      "만약 당신이 선수급 실력자에게 진심으로 메쳐진다면, 아무리 매트 위+완벽한 낙법을 치더라도 정신차리기는 커녕 한동안 숨도 제대로 쉴 수 없을 것입니다."
    ],
    additionalInfo: [
      "한 순간에 승부가 결정나버리는 경우가 많습니다. 우세를 점하기 위한 체력 소모가 굉장히 큽니다.",
      "상대를 땅바닥에 메다꽂는 것이 주무기이기 때문에, 낙법이 굉장히 중요합니다.",
      "객관적인 분석과 총체적 집중에 능한 당신에게 유도가 가장 잘 어울립니다. 유도를 통해 냉철한 판단력을 뽐내보세요.",
      "유명인: 최민호, 조준호, 타카토 나오 히사, 오노 쇼헤이, 이원희, 안바울, 김재범, 송대남, 조민선, 김미정"
    ],
    imageUrl: "/images/judo.jpg",
    bestPartner: {
      type: "ESTP",
      title: "종합격투기",
      imageUrl: "/images/mma.jpg"
    },
    worstPartner: {
      type: "INFP",
      title: "팔괘장",
      imageUrl: "/images/baguazhang.jpg"
    }
  },

  "ISTP": {
    title: "복싱",
    mbti: "ISTP",
    quote: "누구나 그럴싸한 계획을 갖고 있다. 처 맞기 전까지는",
    explanation: [
      "주먹을 사용하는 격투기 중 최고의 자리를 지키고 있습니다.",
      "극도의 민첩성이 요구되기 때문에, 맨손격투기 중 일대다수에 가장 최적화되어 있습니다."
    ],
    additionalInfo: [
      "모든 무술 중 가장 직관적이고 빠른 공격 방식을 극한까지 단련한 상태로 사용하기 때문에 높은 평가를 받고 있습니다.",
      "종합격투기계에서도 복싱은 모든 파이터들의 필수 과목일 정도로, 권투가 다른 격투기에 미친 영향은 매우 큽니다.",
      "하지만 골고루 퍼지는 다른 타격기와 달리 대부분의 공격이 머리로 집중되는 탓에 이러한 부상위험과 사례가 많은 편입니다.",
      "냉철하면서도 만능 재주꾼인 당신에게 복싱이 가장 잘 어울립니다.",
      "유명인: 무하마드 알리, 플로이드 메이웨더, 마이크 타이슨, 로이 존스 주니어, 매니 파퀴아오, 카넬로 알바레스, 타이슨 퓨리, 에롤 스펜스, 게나디 골로프킨"
    ],
    imageUrl: "/images/boxing.jpg",
    bestPartner: {
      type: "ESTJ",
      title: "레슬링",
      imageUrl: "/images/wrestling.jpg"
    },
    worstPartner: {
      type: "INFJ",
      title: "아이키도",
      imageUrl: "/images/aikido.jpg"
    }
  }
};

const mbtiResults = Object.keys(MBTI_RESULTS);

// MBTI 유형으로 ID 찾기
export const getIdByMBTIType = (mbtiType: string): number => {
  const index = mbtiResults.indexOf(mbtiType);
  return index !== -1 ? index + 1 : 1;
};

// ID로 MBTI 유형 찾기
export const getMBTITypeById = (id: string | undefined): string => {
  if (!id) return mbtiResults[0];
  const index = parseInt(id) - 1;
  return index >= 0 && index < mbtiResults.length ? mbtiResults[index] : mbtiResults[0];
};

/**
 * Get MBTI result with corrected asset paths for images
 * @param mbtiType MBTI type to get results for
 * @returns MBTI result with correct asset paths
 */
export const getMBTIResultWithAssets = (mbtiType: MBTIType): MBTIResult => {
  const result = { ...MBTI_RESULTS[mbtiType] } as MBTIResult;
  
  // Fix image paths
  result.imageUrl = getAssetPath(result.imageUrl);
  
  if (result.bestPartner) {
    result.bestPartner = {
      ...result.bestPartner,
      imageUrl: getAssetPath(result.bestPartner.imageUrl)
    };
  }
  
  if (result.worstPartner) {
    result.worstPartner = {
      ...result.worstPartner,
      imageUrl: getAssetPath(result.worstPartner.imageUrl)
    };
  }
  
  return result;
}; 