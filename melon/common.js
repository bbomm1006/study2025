
const appearSetter01 = function(value) {
  $(this.selector).css({
    transform: 'translateY(' + (1 - value) * 50 + 'px)',
    opacity: value,
  });
};
const appearSetter02 = function(value) {
  $(this.selector).css('transform', 'translateX(' + (1 - value) * 150 + 'px)');
};
const fadeInSetter01 = function(value) {
  $(this.selector).css('opacity', value);
};
const melonRenewal2020 = {
  isMobile: false,
  scrollTop: 0,
  scrollTopObservable: null,
  isInteractive: true,
  offsetHeight: 1024,
  resetScenes: function(document) {
    // 201209 - 최소 높이 지정
    const width = $(window).width();
    const height = $(window).height();
    const minHeight = width > 734 ? 1024 : 640;
    this.offsetHeight = Math.max(minHeight, height);
    $('.section01 .img-container').height(height);
  },
  timeline: [
    {
      type: 'offset',
      selector: '.section01 .img-scroll',
      parentSelector: '.section02',
      start: 0,
      end: 0.14,
      setter: function(value) {
        $(this.selector).css({
          opacity: (1 - value),
        });
      },
    },
    {
      type: 'fade',
      selector: '.section02',
      parentSelector: '.section02',
      start: 0.21,
      end: 0.57,
    },
    {
      type: 'fade',
      selector: '.section02 .exp-board',
      parentSelector: '.section02',
      start: 0.33,
      end: 0.7,
    },
    {
      type: 'fade',
      selector: '.section03',
      parentSelector: '.section03',
      start: 0.16,
      end: 0.94,
    },
    {
      type: 'fade',
      selector: '.section04 .tr-t1',
      parentSelector: '.section04',
      start: 0.3,
      end: 0.4,
    },
    {
      type: 'fade',
      selector: '.section04',
      parentSelector: '.section04',
      start: 0.6,
      end: 0.65,
    },
    {
      type: 'offset',
      selector: '.section04 .main-contents',
      parentSelector: '.section04',
      start: 0.5999,
      end: 0.65,
      setter: function(value) {
        $(this.selector).css('opacity', value);
      },
    },
    {
      type: 'onoff',
      selector: '.section04 .video-mask > li:nth-child(2)',
      parentSelector: '.section04',
      start: 0.65,
      setter: function(value) {
        if (value > 0) {
          $(this.selector).playKeyframe('s04-video-slide-move-in 1s 2s forwards');
        } else {
          $(this.selector).resetKeyframe();
        }
      },
    },
    {
      type: 'onoff',
      selector: '.section04 .video-mask > li:nth-child(3)',
      parentSelector: '.section04',
      start: 0.65,
      setter: function(value) {
        if (value > 0) {
          $(this.selector).playKeyframe('s04-video-slide-move-in 1s 3.5s forwards');
        } else {
          $(this.selector).resetKeyframe();
        }
      },
    },
    {
      type: 'onoff',
      selector: '.section04 .image-src1',
      parentSelector: '.section04',
      start: 0.65,
      setter: function(value) {
        if (value > 0) {
          $(this.selector).playKeyframe('s04-video-overlay-fade-in-out 1.4s 1.1s forwards');
        }
      },
    },
    {
      type: 'onoff',
      selector: '.section04 .image-src2',
      parentSelector: '.section04',
      start: 0.65,
      setter: function(value) {
        if (value > 0) {
          $(this.selector).playKeyframe('s04-video-overlay-fade-in-out 1.4s 2.6s forwards');
        }
      },
    },
    {
      type: 'onoff',
      selector: '.section04 .image-src3',
      parentSelector: '.section04',
      start: 0.65,
      setter: function(value) {
        if (value > 0) {
          $(this.selector).playKeyframe('s04-video-overlay-fade-in 1.4s 4.1s forwards');
        }
      },
    },
    {
      type: 'fade',
      selector: '.section05',
      parentSelector: '.section05',
      start: 0.2,
      end: 0.7,
    },
    
    
  
  ],
  stopInteractive: function() {
    $('.contents').removeClass('intr');
    this.isInteractive = false;
    this.processFadeTimeline(this.timeline, 100000);
    this.processOffsetTimeline(this.timeline, 100000);
    this.processOnOffTimeline(this.timeline, 100000);
  },
  processScroll: function(y) {
    if (!this.isInteractive) {
      return;
    }
    this.scrollTop = y;
    this.processFadeTimeline(this.timeline, y);
    this.processOffsetTimeline(this.timeline, y);
    this.processOnOffTimeline(this.timeline, y);
  },
  processFadeTimeline: function(timeline, y) {
    const offsetHeight = this.offsetHeight;
    const fadeItems = timeline.filter(function(item) {
      return item.type === 'fade';
    });

    const fadeNone = fadeItems
        .filter(function(item) {
          const sectionHeight = $(item.parentSelector).height();
          const parentY = $(item.parentSelector).offset().top;
          const targetY = y + offsetHeight;
          const currentY = parentY + item.start * sectionHeight;
          return targetY < currentY;
        })
        .map(function(item) {
          return item.selector;
        })
        .forEach(function(selector) {
          $(selector)
              .removeClass('fade-in')
              .removeClass('fade-out');
        });

    const fadeIn = fadeItems
        .filter(function(item) {
          const sectionHeight = $(item.parentSelector).height();
          const parentY = $(item.parentSelector).offset().top;
          const targetY = y + offsetHeight;
          const currentStartY = parentY + item.start * sectionHeight;
          const currentEndY = parentY + item.end * sectionHeight;
          return targetY >= currentStartY && targetY < currentEndY;
        })
        .map(function(item) {
          return item.selector;
        })
        .forEach(function(selector) {
          $(selector)
              .removeClass('fade-out')
              .addClass('fade-in');
        });

    const fadeOut = fadeItems
        .filter(function(item) {
          const sectionHeight = $(item.parentSelector).height();
          const parentY = $(item.parentSelector).offset().top;
          const targetY = y + offsetHeight;
          const currentY = parentY + item.end * sectionHeight;
          return targetY >= currentY;
        })
        .map(function(item) {
          return item.selector;
        })
        .forEach(function(selector) {
          $(selector)
              .removeClass('fade-in')
              .addClass('fade-out');
        });
  },
  processOffsetTimeline: function(timeline, y) {
    const offsetHeight = this.offsetHeight;
    const offsetItems = timeline.filter(function(item) {
      return item.type === 'offset';
    });

    const offsetBefore = offsetItems
        .filter(function(item) {
          const sectionHeight = $(item.parentSelector).height();
          const parentY = $(item.parentSelector).offset().top;
          const targetY = y + offsetHeight;
          const currentY = parentY + item.start * sectionHeight;
          return targetY < currentY;
        })
        .forEach(function(item) {
          item.subject.onNext(0);
        });

    const offsetOn = offsetItems
        .filter(function(item) {
          const sectionHeight = $(item.parentSelector).height();
          const parentY = $(item.parentSelector).offset().top;
          const targetY = y + offsetHeight;
          const currentStartY = parentY + item.start * sectionHeight;
          const currentEndY = parentY + item.end * sectionHeight;
          return targetY >= currentStartY && targetY < currentEndY;
        })
        .forEach(function(item) {
          const sectionHeight = $(item.parentSelector).height();
          const parentY = $(item.parentSelector).offset().top;
          const targetY = y + offsetHeight;
          const currentY = targetY - (parentY + item.start * sectionHeight);
          const distance = item.end * sectionHeight - item.start * sectionHeight;
          const value = currentY / distance;
          item.subject.onNext(value);
        });

    const offsetAfter = offsetItems
        .filter(function(item) {
          const sectionHeight = $(item.parentSelector).height();
          const parentY = $(item.parentSelector).offset().top;
          const targetY = y + offsetHeight;
          const currentY = parentY + item.end * sectionHeight;
          return targetY >= currentY;
        })
        .forEach(function(item) {
          item.subject.onNext(1);
        });
  },
  processOnOffTimeline: function(timeline, y) {
    const offsetHeight = this.offsetHeight;
    const onOffItems = timeline.filter(function(item) {
      return item.type === 'onoff';
    });

    const off = onOffItems
        .filter(function(item) {
          const sectionHeight = $(item.parentSelector).height();
          const parentY = $(item.parentSelector).offset().top;
          const targetY = y + offsetHeight;
          const currentY = parentY + item.start * sectionHeight;
          return targetY < currentY;
        })
        .forEach(function(item) {
          item.subject.onNext(0);
        });

    const on = onOffItems
        .filter(function(item) {
          const sectionHeight = $(item.parentSelector).height();
          const parentY = $(item.parentSelector).offset().top;
          const targetY = y + offsetHeight;
          const currentStartY = parentY + item.start * sectionHeight;
          return targetY >= currentStartY;
        })
        .forEach(function(item) {
          item.subject.onNext(1);
        });
  },
  init: function(window, $) {
    const ua = window.navigator.userAgent;
    // 201204 - 저전력모드 적용을 위한 ios, android 디텍터 분리
    const isIOS = !!ua.match(/iPhone|iPad|iPod/i);
    const isAndroid = !!ua.match(/Android/i);
    this.isMobile = isIOS || isAndroid;
    $(function() {
      const prefix = 'https://cdnimg.melon.co.kr/resource/image/cds/event/web/campaign/mov/';
      if (this.isMobile) {
        $('#video1').attr('src', prefix + 's04_bg_muvi01_03_540p.mp4');
        $('#video2').attr('src', prefix + 's04_bg_muvi02_03_540p.mp4');
        $('#video3').attr('src', prefix + 's04_bg_muvi03_03_540p.mp4');
        // 201204 - iOS 저전력모드에서 비디오 위에 포스터 이미지를 덮어씌우기 위한 코드 @jud.lee
        if (isIOS) {
          $('#video1').after('<div class="video-poster poster1" style="display:none">poster</div>');
          $('#video2').after('<div class="video-poster poster2" style="display:none">poster</div>');
          $('#video3').after('<div class="video-poster poster3" style="display:none">poster</div>');
          $('#video1').on('suspend', function() {
            $('.video-poster').show();
          });
          $('#video1').on('play', function() {
            $('.video-poster').hide();
            $('#video1').off('suspend');
          });
          $(window).on('visibilitychange', function() {
            setTimeout(function() {
              $('video').each(function() {
                this.play();
              });
            }, 1000);
          });
        }
      } else {
        $('#video1').attr('src', prefix + 's04_bg_muvi01_03.mp4');
        $('#video2').attr('src', prefix + 's04_bg_muvi02_03.mp4');
        $('#video3').attr('src', prefix + 's04_bg_muvi03_03.mp4');
      }
      $('.contents').addClass('intr')
    }.bind(this));
    $(window).on('load', function() {
      // Preloader
      $('body').removeClass('preloading');
      $('.preloader').hide();
      $('.section01 .tr-t1').playKeyframe('s01-txt .7s cubic-bezier(.25,.3,.24,.93) 1s forwards');
      $('.section01 .tr-t2').playKeyframe('s01-txt .7s cubic-bezier(.25,.3,.24,.93) 1.45s forwards');
      if ($(window).width() > 734) {
        $('.section01 .tr-t3').playKeyframe('s01-txt .7s cubic-bezier(.25,.3,.24,.93) 1.45s forwards');
      } else {
        $('.section01 .tr-t3').playKeyframe('s01-txt .4s cubic-bezier(.25,.3,.24,.93) 2s forwards');
      }

      // Resize handler
      this.resetScenes(window.document);
      $(window).resizeAsObservable()
          .debounce(300)
          .subscribe(
              function() {
                this.resetScenes(window.document);
              }.bind(this)
          );

      // Subscribe offsetItems
      const offsetItems = this.timeline.filter(function(item) {
        return item.type === 'offset';
      });

      offsetItems.forEach(function(item) {
        item.subject = new Rx.BehaviorSubject(0);
        item.subject
            .distinctUntilChanged()
            .subscribe(
                function(data) {
                  if (typeof this.setter === 'function') {
                    this.setter.call(this, data);
                  }
                }.bind(item)
            );
      });

      // Subscribe onoffItems
      const onoffItems = this.timeline.filter(function(item) {
        return item.type === 'onoff';
      });
      onoffItems.forEach(function(item) {
        item.subject = new Rx.BehaviorSubject(0);
        item.subject
            .distinctUntilChanged()
            .subscribe(
                function(data) {
                  if (typeof this.setter === 'function') {
                    this.setter.call(this, data);
                  }
                }.bind(item)
            );
      });

      // Scroll handler
      this.scrollTopObservable = $(window).scrollAsObservable()
          .map(function() {
            return $(document).scrollTop();
          });
      this.scrollTopObservable
          .subscribe(
              function(y) {
                this.processScroll(y);
              }.bind(this)
          );
      this.processScroll(0);


      // Begin test code for ua mobile dev
      // TODO: remove for production
      // const ua = window.navigator.userAgent;
      // if (ua.match(/Android/i)) {
      //   $('.contents').addClass('mo mo-and');
      // } else if (ua.match(/iPhone|iPad|iPod/i)) {
      //   $('.contents').addClass('mo mo-ios');
      // }
      //
      // var params = {};
      // window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str, key, value) {
      //   params[key] = value;
      // });
      //
      // const forceLoggedIn = params['login'];
      // if (forceLoggedIn && forceLoggedIn === 'true') {
      //   $('.contents').addClass('logged');
      // }
      //
      // const dday = params['dday'];
      // if (dday && dday === 'true') {
      //   $('.contents').addClass('d-day');
      // }
      //
      // const forceAndroid = params['android'];
      // if (forceAndroid && forceAndroid === 'true') {
      //   $('.contents').removeClass('mo-ios');
      //   $('.contents').addClass('mo mo-and');
      // }
      //
      // const forceIOS = params['ios'];
      // if (forceIOS && forceIOS === 'true') {
      //   $('.contents').removeClass('mo-and');
      //   $('.contents').addClass('mo mo-ios');
      // }
      // End of test code for ua mobile dev;
    }.bind(this));
  },
  loadSeqImg: function($, name, selector, src, duration, width, height, frames) {
    $.keyframe.define([{
      name: name,
      '100%': { 'background-position': (-width * (frames - 1)) + 'px 0' }
    }]);
    $('<img/>').attr('src', src).bind('load', function() {
      $(this).remove();

      const el = $(selector);
      el.css('background-image', 'url(' + src + ')');
      el.css('background-size', (width * frames) + 'px ' + height + 'px');
      el.playKeyframe({
        name: name,
        duration: duration / 1000 + 's',
        timingFunction: 'steps(' + (frames - 1) + ')',
        iterationCount: 'infinite',
      });
    });
  },
};