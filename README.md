# study2025

예제샘플)https://www.easytomorrow.com/kr/product/stick <br/>
readme파일 확인 방법) VSCode에서 .md 파일을 작성 후 Ctrl+Shift+V 


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

<br><br>

# 질문
1. currentColor ?
2. 로고 클릭 안됨
3. grid-m ?
4. 영어와 한글 자간 차이 주는 법?