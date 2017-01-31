(function() {
  App.Progress = (function() {
    function Progress() {
      this.storageAvailable = typeof Storage !== "undefined" && Storage !== null;
    }

    Progress.prototype.challengeComplete = function(page, challenge) {
      var c, challenges, i, j, len, len1, p, pages, ref, ref1;
      if (!this.storageAvailable) {
        return;
      }
      pages = {};
      ref = (localStorage.getItem('pages') || '').split(/,/);
      for (i = 0, len = ref.length; i < len; i++) {
        p = ref[i];
        if (p.length > 0) {
          pages[p] = true;
        }
      }
      pages[page] = true;
      localStorage.setItem('pages', ((function() {
        var results;
        results = [];
        for (p in pages) {
          results.push(p);
        }
        return results;
      })()).join(','));
      challenges = {};
      ref1 = (localStorage.getItem(page) || '').split(/,/);
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        c = ref1[j];
        if (c.length > 0) {
          challenges[c] = true;
        }
      }
      challenges[challenge] = true;
      localStorage.setItem(page, ((function() {
        var results;
        results = [];
        for (c in challenges) {
          results.push(c);
        }
        return results;
      })()).join(','));
      this.updateNavigation();
      return this.markChallengeComplete(challenge);
    };

    Progress.prototype.challengesCompleted = function(page) {
      return (localStorage.getItem(page) || '').split(/,/).filter((function(_this) {
        return function(challengeId) {
          return challengeId.length > 0;
        };
      })(this));
    };

    Progress.prototype.updateNavigation = function() {
      var challengeCount, completedChallengeCount, drawings, drawingsElement, i, item, j, len, len1, link, page, ref, results, slug, totalChallengeCount;
      if (!this.storageAvailable) {
        return;
      }
      if (localStorage.getItem('pages') != null) {
        ref = localStorage.getItem('pages').split(/,/);
        for (i = 0, len = ref.length; i < len; i++) {
          page = ref[i];
          if (localStorage.getItem(page) != null) {
            completedChallengeCount = this.challengesCompleted(page).length;
            if ((challengeCount = $(".nav-sidebar ." + page)).length > 0) {
              totalChallengeCount = parseInt(challengeCount.html().split(' / ')[1]);
              challengeCount.html(completedChallengeCount + " / " + totalChallengeCount);
              if (completedChallengeCount === totalChallengeCount) {
                challengeCount.closest('.tag').removeClass('tag-default tag-warning').addClass('tag-success');
              } else if (completedChallengeCount > 0) {
                challengeCount.closest('.tag').removeClass('tag-default').addClass('tag-warning');
              }
            }
          }
        }
      }
      drawingsElement = $('.nav-sidebar #drawings');
      drawingsElement.find('.my_drawing').remove();
      if ((drawings = this.getDrawings()).length > 0) {
        drawingsElement.find('.drawings-list').removeClass('hidden-xs-up');
        results = [];
        for (j = 0, len1 = drawings.length; j < len1; j++) {
          slug = drawings[j];
          item = $(document.createElement('LI'));
          item.addClass('small my_drawing');
          item.attr({
            id: "navigation-drawing-" + slug
          });
          link = $(document.createElement('A'));
          link.attr({
            href: "/drawings/" + slug
          });
          link.html(this.getDrawing(slug)['title']);
          item.append(link);
          results.push(drawingsElement.append(item));
        }
        return results;
      }
    };

    Progress.prototype.markChallengeComplete = function(challengeId) {
      var challengeTitle, sectionId, tag;
      challengeTitle = $("#" + challengeId).find('.challenge-title');
      if (challengeTitle.find('.tag-success').length > 0) {
        return;
      }
      tag = $(document.createElement('SPAN'));
      tag.addClass('tag').addClass('tag-success').html('Completed!');
      challengeTitle.append(tag);
      sectionId = challengeId.replace(/challenge/, 'section');
      return $(".nav-sidebar #page_" + sectionId + " .tag-success").removeClass('hidden-xs-up');
    };

    Progress.prototype.toggleChallenge = function(page, challengeId) {
      var c, challenges, i, len, ref, successTag;
      successTag = $("#" + challengeId).find('.challenge-title .tag-success');
      if (successTag.length > 0) {
        challenges = {};
        ref = localStorage.getItem(page).split(/,/);
        for (i = 0, len = ref.length; i < len; i++) {
          c = ref[i];
          if (c !== challengeId) {
            challenges[c] = true;
          }
        }
        localStorage.setItem(page, ((function() {
          var results;
          results = [];
          for (c in challenges) {
            results.push(c);
          }
          return results;
        })()).join(','));
        successTag.remove();
      } else {
        this.challengeComplete(page, challengeId);
      }
      return this.updateNavigation();
    };

    Progress.prototype.storeEditorValue = function(editorId, code) {
      if (!this.storageAvailable) {
        return;
      }
      return localStorage.setItem(editorId, code);
    };

    Progress.prototype.getEditorValue = function(editorId) {
      if (!this.storageAvailable) {
        return;
      }
      return localStorage.getItem(editorId);
    };

    Progress.prototype.clearEditorValue = function(editorId) {
      if (!this.storageAvailable) {
        return;
      }
      return localStorage.removeItem(editorId);
    };

    Progress.prototype.saveDrawing = function(slug, title, description, code) {
      var drawings, i, len, ref, t;
      if (!this.storageAvailable) {
        return;
      }
      drawings = {};
      ref = (localStorage.getItem('drawings') || '').split('|||');
      for (i = 0, len = ref.length; i < len; i++) {
        t = ref[i];
        if (t.length > 0) {
          drawings[t] = true;
        }
      }
      drawings[slug] = true;
      localStorage.setItem('drawings', ((function() {
        var results;
        results = [];
        for (t in drawings) {
          results.push(t);
        }
        return results;
      })()).join('|||'));
      localStorage.setItem("drawing-title-" + slug, title);
      localStorage.setItem("drawing-description-" + slug, description);
      localStorage.setItem("drawing-code-" + slug, code);
      return this.updateNavigation();
    };

    Progress.prototype.deleteDrawing = function(slug) {
      var drawings, i, len, ref, t;
      drawings = {};
      ref = (localStorage.getItem('drawings') || '').split('|||');
      for (i = 0, len = ref.length; i < len; i++) {
        t = ref[i];
        if (t.length === 0) {
          continue;
        }
        if (t === slug) {
          continue;
        }
        drawings[t] = true;
      }
      localStorage.setItem('drawings', ((function() {
        var results;
        results = [];
        for (t in drawings) {
          results.push(t);
        }
        return results;
      })()).join('|||'));
      return localStorage.removeItem(slug);
    };

    Progress.prototype.getDrawings = function() {
      return (localStorage.getItem('drawings') || '').split('|||').filter(function(title) {
        return title.length > 0;
      });
    };

    Progress.prototype.getDrawing = function(slug) {
      return {
        title: localStorage.getItem("drawing-title-" + slug),
        description: localStorage.getItem("drawing-description-" + slug),
        code: localStorage.getItem("drawing-code-" + slug)
      };
    };

    Progress.prototype.resetPage = function(page) {
      if (!this.storageAvailable) {
        return;
      }
      localStorage.removeItem(page);
      return location.reload();
    };

    return Progress;

  })();

}).call(this);
