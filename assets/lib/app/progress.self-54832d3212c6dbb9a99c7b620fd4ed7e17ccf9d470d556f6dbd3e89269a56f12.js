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
          pages[p] = 1;
        }
      }
      pages[page] = 1;
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
          challenges[c] = 1;
        }
      }
      challenges[challenge] = 1;
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
      return (localStorage.getItem(page) || '').split(/,/);
    };

    Progress.prototype.updateNavigation = function() {
      var challengeCount, completedChallengeCount, i, len, page, ref, results, totalChallengeCount;
      if (!this.storageAvailable) {
        return;
      }
      if (localStorage.getItem('pages') != null) {
        ref = localStorage.getItem('pages').split(/,/);
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          page = ref[i];
          if (localStorage.getItem(page) != null) {
            completedChallengeCount = this.challengesCompleted(page).length;
            challengeCount = $(".nav-sidebar ." + page);
            totalChallengeCount = parseInt(challengeCount.html().split(' / ')[1]);
            challengeCount.html(completedChallengeCount + " / " + totalChallengeCount);
            if (completedChallengeCount === totalChallengeCount) {
              results.push(challengeCount.closest('.tag').removeClass('tag-default').addClass('tag-success'));
            } else {
              results.push(void 0);
            }
          } else {
            results.push(void 0);
          }
        }
        return results;
      }
    };

    Progress.prototype.markChallengeComplete = function(challengeId) {
      var tag;
      tag = $(document.createElement('SPAN'));
      tag.addClass('tag').addClass('tag-success').html('Completed!');
      return $("#" + challengeId).find('.challenge-title').append(tag);
    };

    Progress.prototype.storeEditorValue = function(editorName, code) {
      if (!this.storageAvailable) {
        return;
      }
      return localStorage.setItem(editorName, code);
    };

    Progress.prototype.getEditorValue = function(editorName) {
      if (!this.storageAvailable) {
        return;
      }
      return localStorage.getItem(editorName);
    };

    return Progress;

  })();

}).call(this);
