<template>
  <!-- <div class="presetDiv" v-if="presetPageOpen">
    <div class="presetContent">
      <button class="closePresetContent" @click="presetPageOpen = false">X</button>
      <button v-for="(_, i) in parseInt(presetCount)" :key="i" class="presetBtn" @click="setPreset(i)">
        <img :src="require(`@/assets/preset${i}.png`)" class="presetImg" />
      </button>
    </div>
  </div> -->
  <div class="presetDiv" v-if="loadingDivOpen" >
    <p style="color:white"> Dieser Plan scheint recht kompliziert zu sein, bitte haben Sie einen Moment Geduld..</p>
    <div class="lds-default" ><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  <!-- <br/><button class="btn" @click="cancelAlgorithm"> Berechnung abbrechen </button> -->
  </div>
  <div class="wrapperDiv">

    <div class="sideBar" :class="openSidebar ? 'forceopen' : ''">
      <div class="closeSidebar" @click="openSidebar = false">
        <i class="fas">&#xf00d;</i>
      </div>
      <div class="logoContainer">
        <img :src="require(`@/assets/logo.png`)" class="logo" />
      </div>
      <div class="tabContainer">
          <div :class="selectedTab == 0 ? 'tab selected' : 'tab'" @click="selectedTab = 0; openSidebar = false">Sitzplan</div>
          <div :class="selectedTab == 1 ? 'tab selected' : 'tab'" @click="selectedTab = 1; openSidebar = false">Schüler</div>
          <div :class="selectedTab == 2 ? 'tab selected' : 'tab'" @click="selectedTab = 2; openSidebar = false">Sitzplanregeln</div>
          <div :class="selectedTab == 3 ? 'tab selected' : 'tab'" @click="selectedTab = 3; openSidebar = false">Einstellungen</div>
      </div>
      <img >
    </div>
    <div class = "openSidebar" @click="openSidebar = true" :class="openSidebar ? 'open' : ''">
      <i class="fas">&#xf0c9;</i>
    </div>
    <!-- <div class="sideDiv">


      <div class="studentFieldWrap">
        <button class="btn" @click="studentFieldVisible = closeEverythingExcept(studentFieldVisible)">
          Namen der Schüler&nbsp;&nbsp;
          <i v-if="!studentFieldVisible" class="arrowdown" />
          <i v-if="studentFieldVisible" class="arrowup" />
        </button>
          <div v-if="studentFieldVisible" class="studentFieldDiv">
            <input class="className" type="text" placeholder="Name der Klasse" v-model="className"/>
            <textarea v-if="studentFieldVisible" class="studentField" v-model="studentFieldValue" placeholder="Name 1" @blur="checkForDoubleNames"> </textarea>
            <input type="file" accept="text/csv,application/csv" id="fileInputThingy" @change="loadStudentFile($event)" />
            <button class="fileInputThingy">
              <label for="fileInputThingy" style="width: 100%; height: 100%; display: block; cursor: pointer"><span style="line-height: 31px"> Datei auswählen </span></label>
            </button>
          </div>
      </div>

      <div class="ruleWrap">
        <button class="btn" @click="ruleVisible = closeEverythingExcept(ruleVisible)">
          Sitzregeln&nbsp;&nbsp;
          <i v-if="!ruleVisible" class="arrowdown" />
          <i v-if="ruleVisible" class="arrowup" />
        </button>
          <div class="ruleDiv" v-if="ruleVisible">
            <button class="btn subBtn" @click="avoidRulesVisible = !avoidRulesVisible">
              Dürfen <strong>nicht</strong> nebeneinander&nbsp;&nbsp;
              <i v-if="!avoidRulesVisible" class="arrowdown" />
              <i v-if="avoidRulesVisible" class="arrowup" />
            </button>
              <div class="ruleTypeDiv" v-if="avoidRulesVisible">
                <div class="singleRuleDiv" v-for="(_, i) in avoidRules.length" :key="i">
                  <button class="deleteRule" @click="deleteRuleAt(parseInt(i), avoidRules)">X</button>
                  <select v-model="avoidRules[parseInt(i)].student1" class="ruleSelect">
                    <option v-for="o in getNames()" :key="o">{{ o }}</option>
                  </select>
                  <p style="margin: 0; margin-right: 3%; margin-left: 3%; display: inline-block; color: darkred">-</p>
                  <select v-model="avoidRules[parseInt(i)].student2" class="ruleSelect">
                    <option v-for="o in getNames()" :key="o">{{ o }}</option>
                  </select>
                </div>
                <button class="btn ruleBtn" @click="addRule(avoidRules)">Neue Regel</button>
              </div>

            <button class="btn subBtn" @click="nearbyRulesVisible = !nearbyRulesVisible">
              Sollen nebeneinander&nbsp;&nbsp;
              <i v-if="!nearbyRulesVisible" class="arrowdown" />
              <i v-if="nearbyRulesVisible" class="arrowup" />
            </button>
              <div class="ruleTypeDiv" v-if="nearbyRulesVisible">
                <div class="singleRuleDiv" v-for="(_, i) in nearbyRules.length" :key="i">
                  <button class="deleteRule" @click="deleteRuleAt(parseInt(i), nearbyRules)">X</button>
                  <select v-model="nearbyRules[parseInt(i)].student1" class="ruleSelect">
                    <option v-for="o in getNames()" :key="o">{{ o }}</option>
                  </select>
                  <p style="margin: 0; margin-right: 3%; margin-left: 3%; display: inline-block; color: darkgreen">-</p>
                  <select v-model="nearbyRules[parseInt(i)].student2" class="ruleSelect">
                    <option v-for="o in getNames()" :key="o">{{ o }}</option>
                  </select>
                </div>
                <button class="btn ruleBtn" @click="addRule(nearbyRules)">Neue Regel</button>
              </div>

            <button class="btn subBtn" @click="firstRowRulesVisible = !firstRowRulesVisible">
              Nach vorne&nbsp;&nbsp;
              <i v-if="!firstRowRulesVisible" class="arrowdown" />
              <i v-if="firstRowRulesVisible" class="arrowup" />
            </button>
              <div class="ruleTypeDiv" v-if="firstRowRulesVisible">
                <div class="firstRowRulesWrap">
                  <div class="singleRuleDiv firstRowRule" v-for="(_, i) in firstRowRules.length" :key="i">
                    <button class="deleteRule" @click="deleteRuleAt(parseInt(i), firstRowRules)">X</button>
                    {{ firstRowRules[i] }}
                  </div>
                </div>
                <select
                  class="ruleSelect"
                  style="width: 100%; height: 100%; margin-bottom: 2%; padding-bottom: 2%; text-align: center"
                  @change="
                    addFirstRow($event.target.value);
                    $event.target.value = 0;
                  "
                >
                  <option value="0" selected hidden>Schüler auswählen</option>

                  <option v-for="o in getNames()" :key="o">{{ o }}</option>
                </select>
              </div>


            <button class="btn subBtn" @click="notBackRulesVisible = !notBackRulesVisible">
              <strong> Nicht </strong> nach hinten&nbsp;&nbsp;
              <i v-if="!notBackRulesVisible" class="arrowdown" />
              <i v-if="notBackRulesVisible" class="arrowup" />
            </button>
              <div class="ruleTypeDiv" v-if="notBackRulesVisible">
                <div class="firstRowRulesWrap">
                  <div class="singleRuleDiv firstRowRule" v-for="(_, i) in notBackRules.length" :key="i">
                    <button class="deleteRule" @click="deleteRuleAt(parseInt(i), notBackRules)">X</button>
                    {{ notBackRules[i] }}
                  </div>
                </div>
                <select
                  class="ruleSelect"
                  style="width: 100%; height: 100%; margin-bottom: 2%; padding-bottom: 2%; text-align: center"
                  @change="
                    addNotBackRow($event.target.value);
                    $event.target.value = 0;
                  "
                >
                  <option value="0" selected hidden>Schüler auswählen</option>

                  <option v-for="o in getNames()" :key="o">{{ o }}</option>
                </select>
              </div>
          </div>
      </div>

      <div class="settingsFieldWrap">
        <button class="btn" @click="algorithmSettingsVisible = closeEverythingExcept(algorithmSettingsVisible)">
          Einstellungen&nbsp;&nbsp;
          <i v-if="!algorithmSettingsVisible" class="arrowdown" />
          <i v-if="algorithmSettingsVisible" class="arrowup" />
        </button>
          <div v-if="algorithmSettingsVisible" class="algorithmSettingsDiv">
            <p style="display:inline-block; padding-right: 10px;">
              <span style="vertical-align: middle;padding-right:10px">Stufe der Zufälligkeit:</span>
              <input style="vertical-align: middle;" type="range" min="0" max="2" v-model="algorithmRandomness"/>
              <span style="vertical-align: middle;">{{ algorithmRandomness }}</span>
            </p>
            <p style="display:inline-block; padding-right: 10px;">
              <input type="checkbox" style="height:20px;width:20px;vertical-align: middle;" v-model="highlightManuallySelected"/>
               <span style="vertical-align: middle;">Manuell ausgewählte Schüler hervorheben</span>
            </p>
            <p style="display:inline-block; padding-right: 10px;">
              <input type="checkbox" style="height:20px;width:20px;vertical-align: middle;" v-model="downloadPlanFromTeacherPerspective"/>
               <span style="vertical-align: middle;">Plan aus Lehrerperspektive herunterladen</span>
            </p>
          </div>
      </div>

      <button @click="computePlan" class="btn submit">Plan erstellen</button>
      <button @click="resetNamesOnPlan" class="btn submit">Namen zurücksetzen</button>
      <button @click="downloadPlan" class="btn submit">Bild herunterladen</button>

      <span class="credits creditsWrap"
        >{{ "\n" }}Entwickelt von: {{ "\n" }}
        <a class="credits creditsA" href="https://github.com/Florik3ks" target="_blank">Florian E.</a>
        &
        <a class="credits creditsA" href="https://github.com/1td" target="_blank"> Joshua J.</a>
        {{ "\n" }}mit Hilfe von
        <a class="credits creditsA" href="https://github.com/PlisJan" target="_blank">Jan P.</a>
        {{ "\n" }}
        {{ "\n" }}<a class="credits creditsA" href="https://www.gymnasium-oberstadt.de/" target="_blank">GMO</a> 13 Informatik-LK (2022){{ "\n" }}unter der Leitung von Herrn Meß
      </span>
    </div> -->



    <div class="rightSide" >

      <div class="sitzplanWrapper" v-if="selectedTab == 0">
        <div id="sitzplan" >
          <div class="tafelDivOuter">
            <div class="tafelDivInner" :class="rotateText ? 'rotate' : ''" id="tafel" >Lehrer</div>
          </div>
          <div class="sitzplatzdiv">
            <div class="room" :class="takingPicture ? 'picture' : ''">
              <div class="row" v-for="(_, y) in parseInt(gridHeight)" :key="y">
                <div 
                  :class="isMarked(x,y) ? 'marked' : takingPicture ? 'picture' : ''"
                  class="column"
                  v-for="(_, x) in parseInt(gridWidth)"
                  :key="x"
                  @contextmenu.prevent
                  :style="{
                    // height: 85 / parseInt(gridHeight) + 'vh',
                    //border: !isMarked(x, y) ? 'lightgrey 2px solid' : 'black 1px solid',

                  }"
                >
                  <div
                    :key="seats"
                    :class="isMarked(x,y) ? 'marked' : takingPicture ? 'picture' : ''"
                    class="seat"
                    @mousedown.left="onFieldClick(x, y)"
                    :style="{
                      'font-size': 'medium',
                      //'background-color': isMarked(x, y) ? (isManuallySelected(x,y) ? highlightManuallySelected ? 'skyblue' : 'lightblue' : 'lightblue') : 'white',
                      //border: isMarked(x, y) ? 'black 2px solid' : 'none',
                    }"
                    
                  ><p 
                  v-text="seats[x.toString() + ',' + y.toString()].name"
                  :class="rotateText ? 'rotate' : ''"></p> </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="planSettingsContainer">
          <div class="buttonsContainer">
            <div class="buttons">
              <button class="button" @click="computePlan"><span class="text">Plan generieren</span></button>
              <button class="button" @click="downloadPlan"><span class="text">Plan herunterladen</span></button>
            </div>
            <div class="openClose" :class="planSettingsOpen ? 'open' : ''" @click="planSettingsOpen = !planSettingsOpen">
              <i v-if="planSettingsOpen" class="arrowdown" />
              <i v-if="!planSettingsOpen" class="arrowup" />
              <span class="text">Raumeinstellungen</span>
            </div>
          </div>
          <div class="planSettings" :class="planSettingsOpen ? 'open' : ''">
            <div class="presets">
              <button v-for="(_, i) in parseInt(presetCount)" :key="i" class="presetBtn" @click="setPreset(i)">
                <img :src="require(`@/assets/preset${i}.png`)" class="presetImg" />
              </button>
            </div>
            <div class="sliderDiv">
              <div class="sliderInformationDiv">
                <span> {{ gridWidth }} * {{ gridHeight }}<br />{{ getNumberOfFields() }} Sitzplätze</span>
              </div>
              <input type="range" name="gridWidth" v-model="gridWidth" min="5" :max="maxGridWidth" class="inpSlider horizontalSlider" />
              <input type="range" name="gridHeight" v-model="gridHeight" min="5" :max="maxGridHeight" class="inpSlider verticalSlider" />
            </div>

          </div>
        </div>
      </div>

      <div class="studentListWrapper" v-if="selectedTab == 1">

        <div class="names">
          <div class="namesInnerWrapper">
            <input class="className" type="text" placeholder="Name der Klasse" v-model="className" />
            <div class="studentList" v-if="students.length > 0"
              @drop="onStudentListDrop($event)"
              @dragover.prevent
              @dragenter.prevent
            >
              <div class="list">
                <div v-for="(student, i) in students" :key="i" class="student" draggable="true" @dragstart="startDrag($event, student)">
                  <div class="number">{{i + 1}}.</div>
                  <input type="text" v-model="students[i]" @change="studentChange(i)" title="In den Raum ziehen"/> 
                  <!-- <div class="removeStudent" @click="removeStudent(i)" title="Schüler löschen">✖</div> -->
                  <!-- <div class="dragStudent"  title="In den Raum ziehen">↳</div> -->
                </div>
              </div>

              <div class="newStudentContainer">
                <div 
                  class="removeStudent big" title="Papierkorb" @click="alert('Ziehen Sie einen Schüler über den Papierkorb, um ihn zu löschen.')"
                  @drop="onDropDelete($event)"
                  @dragover.prevent
                  @dragenter.prevent
                >
                <i class='fas'>&#xf2ed;</i>
                </div>
                <input type="text" @change="addNewStudent" v-model="newStudent" pattern="[a-zA-Z0-9 ]+" required placeholder="Neuer Schüler" class="newStudent">
              </div>
            </div>
            <div title="Soll der Dateiinhalt angehängt werden oder die bisherige Liste überschreiben?">
              <input id="appendBox" type="checkbox" v-model="appendFromFile"/>
              <label for="appendBox">Dateiinhalt anhängen?</label>
            </div>
            <input type="file" accept="text/csv,application/csv" id="fileInputThingy" @change="loadStudentFile($event)" />
            <button class="fileInputThingy" @click="confirmLoad($event)">
              <label for="fileInputThingy"><span style="line-height: 31px"> Datei auswählen </span></label>
            </button>
          </div>
        </div>



        <div class="smallroom">
          <div class="tafelDivOuter">
          <div class="questionMark big"
           @click="alert('Die Schüler können aus der Liste auf verfügbare Tische gezogen werden. Durch Klicken auf besetzte Tische kann festgelegt werden, ob der Platz bei einer Sitzplangenerierung so bleiben soll oder neu besetzt werden darf.')"
          >?</div>
            <div class="tafelDivInner" :class="rotateText ? 'rotate' : ''" id="tafel" >Lehrer</div>
          <div 
            class="removeStudent big" title="Papierkorb" @click="alert('Ziehen Sie einen Schüler über den Papierkorb, um ihn zu löschen.')"
            @drop="onDropDelete($event)"
            @dragover.prevent
            @dragenter.prevent
          >
            <i class='fas'>&#xf2ed;</i>
          </div>
          </div>
          <div class="room">
            <div class="row" v-for="(_, y) in parseInt(gridHeight)" :key="y">
              <div 
                :class="isMarked(x,y) ? 'marked' : ''"
                class="column"
                v-for="(_, x) in parseInt(gridWidth)"
                :key="x"
              >

                <div 
                  :key="seats"
                  :class="isManuallySelected(x,y) ? 'manuallySelected' : isOccupied(x,y) ? 'occupied marked' : isMarked(x,y) ? 'marked' : ''"
                  class="seat"
                  @click="tryManualSelection(x,y)"
                  v-on="isMarked(x,y) ? { drop: ($event) => onDrop($event, x, y), dragover: ($event) => $event.preventDefault() } : {drop: ($event) => $event.preventDefault(), dragover: ($event) => {} }"
                  @dragenter.prevent
                  :draggable="isOccupied(x,y)"
                  @dragstart="startDragFromSeat($event, x, y)"
                >
                  <i v-if="isManuallySelected(x,y)" class='fas lock'>&#xf023;</i>

                  <p class="small" v-text="seats[x.toString() + ',' + y.toString()].name"></p> </div>
              </div>
            </div>
          </div>

        </div>
        <!-- <div class="studentFieldWrap">
            <input class="className" type="text" placeholder="Name der Klasse" v-model="className"/>
            <textarea v-if="studentFieldVisible" class="studentField" v-model="studentFieldValue" placeholder="Name 1" @blur="checkForDoubleNames"> </textarea>


        </div> -->

      </div>

      <div class="settingsWrapper" v-if="selectedTab == 2">
          <div class="ruleDiv">
            <button class="btn subBtn" @click="avoidRulesVisible = !avoidRulesVisible">
              Dürfen <strong>nicht</strong> nebeneinander&nbsp;&nbsp;
              <i v-if="!avoidRulesVisible" class="arrowdown" />
              <i v-if="avoidRulesVisible" class="arrowup" />
            </button>
              <div class="ruleTypeDiv" v-if="avoidRulesVisible">
                <div class="singleRuleDiv" v-for="(_, i) in avoidRules.length" :key="i">
                  <button class="deleteRule" @click="deleteRuleAt(parseInt(i), avoidRules)"><i class='fas'>&#xf2ed;</i></button>
                  <select v-model="avoidRules[parseInt(i)].student1" class="ruleSelect">
                    <option v-for="o in getNames()" :key="o">{{ o }}</option>
                  </select>
                  <p >-</p>
                  <select v-model="avoidRules[parseInt(i)].student2" class="ruleSelect">
                    <option v-for="o in getNames()" :key="o">{{ o }}</option>
                  </select>
                </div>
                <button class="btn ruleBtn" @click="addRule(avoidRules)">Neue Regel</button>
              </div>

            <button class="btn subBtn" @click="nearbyRulesVisible = !nearbyRulesVisible">
              Sollen nebeneinander&nbsp;&nbsp;
              <i v-if="!nearbyRulesVisible" class="arrowdown" />
              <i v-if="nearbyRulesVisible" class="arrowup" />
            </button>
              <div class="ruleTypeDiv" v-if="nearbyRulesVisible">
                <div class="singleRuleDiv" v-for="(_, i) in nearbyRules.length" :key="i">
                  <button class="deleteRule" @click="deleteRuleAt(parseInt(i), nearbyRules)"><i class='fas'>&#xf2ed;</i></button>
                  <select v-model="nearbyRules[parseInt(i)].student1" class="ruleSelect">
                    <option v-for="o in getNames()" :key="o">{{ o }}</option>
                  </select>
                  <p>-</p>
                  <select v-model="nearbyRules[parseInt(i)].student2" class="ruleSelect">
                    <option v-for="o in getNames()" :key="o">{{ o }}</option>
                  </select>
                </div>
                <button class="btn ruleBtn" @click="addRule(nearbyRules)">Neue Regel</button>
              </div>

            <button class="btn subBtn" @click="firstRowRulesVisible = !firstRowRulesVisible">
              Nach vorne&nbsp;&nbsp;
              <i v-if="!firstRowRulesVisible" class="arrowdown" />
              <i v-if="firstRowRulesVisible" class="arrowup" />
            </button>
              <div class="ruleTypeDiv" v-if="firstRowRulesVisible">
                <div class="firstRowRulesWrap">
                  <div class="singleRuleDiv firstRowRule" v-for="(_, i) in firstRowRules.length" :key="i">
                    <button class="deleteRule" @click="deleteRuleAt(parseInt(i), firstRowRules)"><i class='fas'>&#xf2ed;</i></button>
                    {{ firstRowRules[i] }}
                  </div>
                </div>
                <select
                  class="ruleSelect"
                  @change="
                    addFirstRow($event.target.value);
                    $event.target.value = 0;
                  "
                >
                  <option value="0" selected hidden>Schüler auswählen</option>

                  <option v-for="o in getNames()" :key="o">{{ o }}</option>
                </select>
              </div>


            <button class="btn subBtn" @click="notBackRulesVisible = !notBackRulesVisible">
              <strong> Nicht </strong> nach hinten&nbsp;&nbsp;
              <i v-if="!notBackRulesVisible" class="arrowdown" />
              <i v-if="notBackRulesVisible" class="arrowup" />
            </button>
              <div class="ruleTypeDiv" v-if="notBackRulesVisible">
                <div class="firstRowRulesWrap">
                  <div class="singleRuleDiv firstRowRule" v-for="(_, i) in notBackRules.length" :key="i">
                    <button class="deleteRule" @click="deleteRuleAt(parseInt(i), notBackRules)"><i class='fas'>&#xf2ed;</i></button>
                    {{ notBackRules[i] }}
                  </div>
                </div>
                <select
                  class="ruleSelect"
                  @change="
                    addNotBackRow($event.target.value);
                    $event.target.value = 0;
                  "
                >
                  <option value="0" selected hidden>Schüler auswählen</option>

                  <option v-for="o in getNames()" :key="o">{{ o }}</option>
                </select>
              </div>
          </div>
      </div>

      <div class="settingsWrapper" v-if="selectedTab == 3">
        <span>
        TODO
        </span>
      </div>
    </div>

  </div>
</template>

<script lang="ts" src="@/Sitzplatzplaner.ts" />

<style scoped src="@/style/style.css" />
