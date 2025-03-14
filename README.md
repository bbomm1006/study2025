# study2025

예제샘플)https://www.easytomorrow.com/kr/product/stick <br/>
readme파일 확인 방법) VSCode에서 .md 파일을 작성 후 Ctrl+Shift+V 

## 애니메이션 라이브러리 사이트
https://lottiefiles.com/kr/<br/>
https://threejs.org/

## Tailwind 기본적인 폰트 사이즈
| 클래스      | 크기         |
|-------------|--------------|
| `text-xs`   | 0.75rem (12px)  |
| `text-sm`   | 0.875rem (14px) |
| `text-base` | 1rem (16px)     |
| `text-lg`   | 1.125rem (18px) |
| `text-xl`   | 1.25rem (20px)  |
| `text-2xl`  | 1.5rem (24px)   |
| `text-3xl`  | 1.875rem (30px) |
| `text-4xl`  | 2.25rem (36px)  |
| `text-5xl`  | 3rem (48px)     |
| `text-6xl`  | 4rem (64px)     |
| `text-7xl`  | 5rem (80px)     |
| `text-8xl`  | 6rem (96px)     |
| `text-9xl`  | 8rem (128px)    |

## Tailwind `font-weight` (글꼴 두께) 클래스

| 클래스명         | `font-weight` 값   | 설명                      |
|-----------------|--------------------|---------------------------|
| `font-thin`     | `100`              | 가장 얇은 글씨            |
| `font-extralight`| `200`             | 약간 얇은 글씨            |
| `font-light`    | `300`              | 가벼운 글씨               |
| `font-normal`   | `400`              | 기본값                   |
| `font-medium`   | `500`              | 글꼴 두께 500 (보통 두꺼운 글씨) |
| `font-semibold` | `600`              | 세미볼드                  |
| `font-bold`     | `700`              | 볼드체 (굵은 글씨)        |
| `font-extrabold`| `800`              | 아주 굵은 글씨            |
| `font-black`    | `900`              | 가장 굵은 글씨            |

### 특정 두께를 임의로 설정하기
정확한 두께 값을 지정하려면 임의 값(Arbitrary Value)을 사용할 수 있습니다:
```html
<p class="font-[500]">이 텍스트는 글꼴 두께가 500입니다.</p>
```

## Tailwind 기본적인 회색 색상 클래스
| 클래스명      | 색상 코드 (HEX) |
|--------------|---------------|
| `gray-50`   | `#f9fafb`     |
| `gray-100`  | `#f3f4f6`     |
| `gray-200`  | `#e5e7eb`     |
| `gray-300`  | `#d1d5db`     |
| `gray-400`  | `#9ca3af`     |
| `gray-500`  | `#6b7280`     |
| `gray-600`  | `#4b5563`     |
| `gray-700`  | `#374151`     |
| `gray-800`  | `#1f2937`     |
| `gray-900`  | `#111827`     |
| `gray-950`  | `#030712`     |

## Tailwind `line-height`(줄 간격) 클래스

| 클래스명         | `line-height` 값  | 설명 |
|-----------------|------------------|------|
| `leading-none`  | `1`              | 줄 간격 없음 (가장 좁음) |
| `leading-tight` | `1.25`           | 타이트한 줄 간격 |
| `leading-snug`  | `1.375`          | 약간 좁은 줄 간격 |
| `leading-normal` | `1.5`           | 기본값 (일반적인 줄 간격) |
| `leading-relaxed` | `1.625`        | 조금 더 여유로운 줄 간격 |
| `leading-loose` | `2`              | 넓은 줄 간격 (가장 큼) |

### 특정 크기로 줄 간격 설정하기
정확한 줄 간격을 지정하려면 임의 값(Arbitrary Value)을 사용할 수 있습니다.
```html
<p class="leading-[1.75rem]">이 텍스트는 1.75rem 줄 간격을 가집니다.</p>
<p class="leading-[32px]">이 텍스트는 32px 줄 간격을 가집니다.</p>
```

## 이미지 속성
**src**는 하나의 이미지 소스만 지정하는 반면, **srcset**은 여러 이미지 소스를 제공하여, 브라우저가 화면의 해상도나 크기에 맞는 최적의 이미지를 선택할 수 있도록 합니다.<br>
srcset을 사용하면 다양한 기기나 화면 해상도에서 이미지 품질을 최적화할 수 있어 웹 성능과 사용자 경험을 향상시킬 수 있습니다.<br>
srcset은 width(화면의 너비) 또는 density(화면의 해상도)에 맞춰 이미지를 지정할 수 있습니다.
```html
<img src="image.jpg" 
     srcset="image-320w.jpg 320w, image-480w.jpg 480w, image-800w.jpg 800w" 
     alt="Example Image">
```

## `rounded` 클래스
| 클래스           | 적용 값 (`border-radius`) |
|-----------------|-------------------------|
| `rounded-none`  | 0px                      |
| `rounded-sm`    | 2px                      |
| `rounded`       | 4px                      |
| `rounded-md`    | 6px                      |
| `rounded-lg`    | 8px                      |
| `rounded-xl`    | 12px                     |
| `rounded-2xl`   | 16px                     |
| `rounded-3xl`   | 24px                     |
| `rounded-full`  | 9999px (완전한 원)        |

# Tailwind CSS Flexbox 정리

## 📌 `flex-direction` (아이템 정렬 방향)
| 클래스 | CSS 속성 | 설명 |
|--------|-------------------|------------------------------|
| `flex-row` | `flex-direction: row;` | 가로 방향 (기본값) |
| `flex-row-reverse` | `flex-direction: row-reverse;` | 가로 방향 (반대) |
| `flex-col` | `flex-direction: column;` | 세로 방향 |
| `flex-col-reverse` | `flex-direction: column-reverse;` | 세로 방향 (반대) |

---

## 📌 `flex-wrap` (줄 바꿈 설정)
| 클래스 | CSS 속성 | 설명 |
|--------|-------------------|------------------------------|
| `flex-wrap` | `flex-wrap: wrap;` | 여러 줄로 자동 줄바꿈 |
| `flex-wrap-reverse` | `flex-wrap: wrap-reverse;` | 반대 방향 줄바꿈 |
| `flex-nowrap` | `flex-wrap: nowrap;` | 한 줄 유지 (기본값) |

---

## 📌 `justify-content` (주축 정렬)
| 클래스 | CSS 속성 | 설명 |
|--------|------------------------------|------------------------------|
| `justify-start` | `justify-content: flex-start;` | 왼쪽 정렬 (기본값) |
| `justify-end` | `justify-content: flex-end;` | 오른쪽 정렬 |
| `justify-center` | `justify-content: center;` | 가운데 정렬 |
| `justify-between` | `justify-content: space-between;` | 양쪽 정렬 (여백 균등) |
| `justify-around` | `justify-content: space-around;` | 요소 주위 여백 균등 |
| `justify-evenly` | `justify-content: space-evenly;` | 요소 간 여백 균등 |

---

## 📌 `align-items` (교차축 정렬)
| 클래스 | CSS 속성 | 설명 |
|--------|------------------------------|------------------------------|
| `items-start` | `align-items: flex-start;` | 위쪽 정렬 |
| `items-end` | `align-items: flex-end;` | 아래쪽 정렬 |
| `items-center` | `align-items: center;` | 중앙 정렬 |
| `items-baseline` | `align-items: baseline;` | 텍스트 기준선 정렬 |
| `items-stretch` | `align-items: stretch;` | 컨테이너 높이 맞춤 (기본값) |

---

## 📌 `align-content` (다중 행 정렬)
| 클래스 | CSS 속성 | 설명 |
|--------|------------------------------|------------------------------|
| `content-start` | `align-content: flex-start;` | 위쪽 정렬 |
| `content-end` | `align-content: flex-end;` | 아래쪽 정렬 |
| `content-center` | `align-content: center;` | 가운데 정렬 |
| `content-between` | `align-content: space-between;` | 위아래 간격 균등 |
| `content-around` | `align-content: space-around;` | 위아래 여백 균등 |
| `content-evenly` | `align-content: space-evenly;` | 요소 간 여백 균등 |

---

## 📌 `align-self` (개별 아이템 정렬)
| 클래스 | CSS 속성 | 설명 |
|--------|------------------------------|------------------------------|
| `self-auto` | `align-self: auto;` | 부모 설정을 따름 (기본값) |
| `self-start` | `align-self: flex-start;` | 위쪽 정렬 |
| `self-end` | `align-self: flex-end;` | 아래쪽 정렬 |
| `self-center` | `align-self: center;` | 중앙 정렬 |
| `self-stretch` | `align-self: stretch;` | 부모 높이 맞춤 |
| `self-baseline` | `align-self: baseline;` | 텍스트 기준선 정렬 |

---

## 📌 `flex-grow` (요소 확장)
| 클래스 | CSS 속성 | 설명 |
|--------|-------------------|------------------------------|
| `flex-grow-0` | `flex-grow: 0;` | 확장 안 함 (기본값) |
| `flex-grow` | `flex-grow: 1;` | 가능한 공간 채움 |

---

## 📌 `flex-shrink` (요소 축소)
| 클래스 | CSS 속성 | 설명 |
|--------|-------------------|------------------------------|
| `flex-shrink-0` | `flex-shrink: 0;` | 크기 유지 (축소 안 함) |
| `flex-shrink` | `flex-shrink: 1;` | 필요 시 축소 (기본값) |

---

## 📌 `flex-basis` (기본 크기 설정)
| 클래스 | CSS 속성 | 설명 |
|--------|-------------------|------------------------------|
| `basis-0` | `flex-basis: 0px;` | 0px |
| `basis-auto` | `flex-basis: auto;` | 자동 (기본값) |
| `basis-1/2` | `flex-basis: 50%;` | 50% 크기 |
| `basis-full` | `flex-basis: 100%;` | 100% 크기 |

---

## 📌 `gap` (간격 조절)
| 클래스 | CSS 속성 | 설명 |
|--------|-------------------|------------------------------|
| `gap-0` | `gap: 0px;` | 간격 없음 |
| `gap-2` | `gap: 0.5rem;` | 8px 간격 |
| `gap-4` | `gap: 1rem;` | 16px 간격 |
| `gap-8` | `gap: 2rem;` | 32px 간격 |

---

## 📌 `order` (아이템 순서)
| 클래스 | CSS 속성 | 설명 |
|--------|-------------------|------------------------------|
| `order-1` | `order: 1;` | 첫 번째 요소 |
| `order-2` | `order: 2;` | 두 번째 요소 |
| `order-last` | `order: 9999;` | 마지막 요소 |

<br><br>

# 질문
1. currentColor ?
2. 로고 클릭 안됨
3. grid-m ?
4. 영어와 한글 자간 차이 주는 법?
5. 예제 사이트에 page_productDropdown__PneDO <-- 이런식으로 __뒤에 붙는 문구 ??
6. 맨 위로 올렸을 때 잔상 왜..