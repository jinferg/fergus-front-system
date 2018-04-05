---
layout: doc
title: "Form"
updated: 2017-01-27
category: module
---

## Form

The form module separates each row of fields with the `m-form__item` class container.

### Basic Form

<form class="m-form">

  <div class="m-form__item">
    <label for="email">Username</label>
    <input id="email" type="email" placeholder="Email">
    <span class="m-form__message">This is a required field.</span>
  </div>

  <div class="m-form__item">
    <label for="password">Password</label>
    <input id="password" type="password" placeholder="Password">
  </div>

  <div class="m-form__item">
    <label class="m-form__checkbox">
      I agree to the Terms and Conditions
      <input type="checkbox"/>
      <div class="m-form__checkbox-indicator"></div>
    </label>
  </div>

  <button type="submit" class="s-button -broad">
    Submit
  </button>

</form>

```html
<form class="m-form">

  <div class="m-form__item">
    <label for="email">Username</label>
    <input id="email" type="email" placeholder="Email">
    <span class="m-form__message">This is a required field.</span>
  </div>

  <div class="m-form__item">
    <label for="password">Password</label>
    <input id="password" type="password" placeholder="Password">
  </div>

  <div class="m-form__item">
    <label class="m-form__checkbox">
      I agree to the Terms and Conditions
      <input type="checkbox"/>
      <div class="m-form__checkbox-indicator"></div>
    </label>
  </div>

  <button type="submit" class="s-button -broad">
    Submit
  </button>

</form>
```


### Disabled Fields

The disabled state blends the style into the background and disabled the clickable state.

<form class="m-form">
  <div class="m-form__item">
    <label for="email">Email</label>
    <input id="email" type="email" placeholder="Email" value="jin@litmos.com" disabled="disabled">
  </div>


  <div class="m-form__item">
    <label for="password">Password</label>
    <input id="password" type="password" placeholder="Password" disabled="disabled">
  </div>

  <div class="m-form__item">  
    <label class="m-form__checkbox -checkbox">Disabled & checked
      <input type="checkbox" disabled="disabled" checked="checked"/>
      <div class="m-form__checkbox-indicator"></div>
    </label>

    <label class="m-form__radio">Disabled & checked
      <input type="radio" name="radio2" disabled="disabled" checked="checked"/>
      <div class="m-form__radio-indicator"></div>
    </label>
  </div>

  <div class="m-form__item">
    <div class="m-form__select">
      <select disabled="disabled">
        <option>Disabled</option>
        <option>Option</option>
        <option>Option</option>
      </select>
      <div class="m-form__select-arrow"></div>
    </div>
  </div>
</form>

### Multi-Column Fields

Here is an example of a Company Information form in multi-column format.

<div class="l-row">
  <div class="l-col -m-16 -t-15 -d-14">
    <form class="m-form">
      <h5 class="s-head -semi-bold -ruled">
        Company Information
      </h5>
      <div class="l-row -narrow">
        <div class="l-col -m-16 -t-8">
          <div class="m-form__item">
            <label for="firstname" class="-required">Company</label>
            <input id="firstname" type="text" placeholder="Company" class="-fluid">
          </div>
        </div>
        <div class="l-col -m-16 -t-8">
          <div class="m-form__item">
            <label for="lastname" class="">Title</label>
            <input id="lastname" type="text" placeholder="Digital Designer" value="Digital Designer" disabled="disabled" class="-fluid">
          </div>
        </div>
      </div>

      <div class="m-form__item">
        <label for="username" class="-required">Address</label>
        <input id="username" type="text" placeholder="Level 5, Graham St" class="-fluid u-marg-bottom-small">
        <input id="username" type="text" placeholder="Central" class="-fluid">
        <span class="m-form__message">Most people use an email addres as their username</span>
      </div>

      <div class="l-row -narrow">
        <div class="l-col -m-16 -t-8">
          <div class="m-form__item">
            <label for="email">City</label>
            <input id="email" type="email" placeholder="City" class="-fluid">
          </div>
        </div>
        <div class="l-col -m-16 -t-8">
          <div class="m-form__item">
            <label for="email">State</label>
            <input id="website" type="Website" placeholder="State" class="-fluid">
          </div>
        </div>
      </div>

      <div class="l-row -narrow">
        <div class="l-col -m-16 -t-8">
          <div class="m-form__item">
            <label for="email">Zip</label>
            <input id="email" type="email" placeholder="City" class="-fluid">
          </div>
        </div>
        <div class="l-col -m-16 -t-8">
          <div class="m-form__item">
            <label for="email">Country</label>
            <div class="m-form__select -fluid">
              <select>
                <option>USA</option>
                <option>New Zealand</option>
                <option>Australia</option>
              </select>
              <div class="m-form__select-arrow"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="m-form__item">
        <button type="submit" class="s-button -broad">
          Submit
        </button>
      </div>
    </form>
  </div>
</div>

```html
<form class="m-form">
  <h5 class="s-head -semi-bold -ruled">
    Company Information
  </h5>
  <div class="l-row -narrow">
    <div class="l-col -m-16 -t-8">
      <div class="m-form__item">
        <label for="firstname" class="-required">Company</label>
        <input id="firstname" type="text" placeholder="Company" class="-fluid">
      </div>
    </div>
    <div class="l-col -m-16 -t-8">
      <div class="m-form__item">
        <label for="lastname" class="">Title</label>
        <input id="lastname" type="text" placeholder="Digital Designer" value="Digital Designer" disabled="disabled" class="-fluid">
      </div>
    </div>
  </div>

  <div class="m-form__item">
    <label for="username" class="-required">Address</label>
    <input id="username" type="text" placeholder="Level 5, Graham St" class="-fluid u-marg-bottom-small">
    <input id="username" type="text" placeholder="Central" class="-fluid">
    <span class="m-form__message">Most people use an email addres as their username</span>
  </div>

  <div class="l-row -narrow">
    <div class="l-col -m-16 -t-8">
      <div class="m-form__item">
        <label for="email">City</label>
        <input id="email" type="email" placeholder="City" class="-fluid">
      </div>
    </div>
    <div class="l-col -m-16 -t-8">
      <div class="m-form__item">
        <label for="email">State</label>
        <input id="website" type="Website" placeholder="State" class="-fluid">
      </div>
    </div>
  </div>

  <div class="l-row -narrow">
    <div class="l-col -m-16 -t-8">
      <div class="m-form__item">
        <label for="email">Zip</label>
        <input id="email" type="email" placeholder="City" class="-fluid">
      </div>
    </div>
    <div class="l-col -m-16 -t-8">
      <div class="m-form__item">
        <label for="email">Country</label>
        <div class="m-form__select -fluid">
          <select>
            <option>USA</option>
            <option>New Zealand</option>
            <option>Australia</option>
          </select>
          <div class="m-form__select-arrow"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="m-form__item">
    <button type="submit" class="s-button -broad">
      Submit
    </button>
  </div>
</form>
```

### Alternate Forms

When forms sit inside a card fields can be altered in color to better suit its background using the `-card` modifier.

<div class="l-row">
  <div class="l-col -m-16 -t-15 -d-14">
    <div class="l-band -white u-pad-tight">
      <form class="m-form -card">
        <h5 class="s-head -semi-bold -ruled">
          General Information
        </h5>
        <div class="l-row -narrow">
          <div class="l-col -m-16 -t-8">
            <div class="m-form__item">
              <label for="firstname" class="-required">Firstname</label>
              <input id="firstname" type="text" placeholder="Firstname" value="Jin" disabled="disabled" class="-fluid">
            </div>
          </div>
          <div class="l-col -m-16 -t-8">
            <div class="m-form__item">
              <label for="lastname" class="-required">Lastname</label>
              <input id="lastname" type="text" placeholder="Lastname" class="-fluid">
            </div>
          </div>
        </div>

        <div class="m-form__item">
          <label for="username" class="-required">Username</label>
          <input id="username" type="text" placeholder="jinsupark252" class="-fluid">
          <span class="m-form__message">Most people use an email addres as their username</span>
        </div>

        <div class="l-row -narrow">
          <div class="l-col -m-16 -t-8">
            <div class="m-form__item">
              <label for="email">Email</label>
              <input id="email" type="email" placeholder="Email" class="-fluid">
            </div>
          </div>
          <div class="l-col -m-16 -t-8">
            <div class="m-form__item">
              <label for="email">Website</label>
              <input id="website" type="Website" placeholder="Litmos.com" class="-fluid">
            </div>
          </div>
        </div>

        <div class="m-form__item">
          <label for="email">Email</label>
          <input id="email" type="email" placeholder="Email">
          <span class="m-form__message">This is a required field.</span>
        </div>

        <div class="m-form__item">
          <label for="password">Password</label>
          <input id="password" type="password" placeholder="Password">
        </div>

        <div class="m-form__item">

          <label class="m-form__checkbox -checkbox">First checkbox
            <input type="checkbox" checked="checked"/>
            <div class="m-form__checkbox-indicator"></div>
          </label>

          <label class="m-form__checkbox -checkbox">Second checkbox
            <input type="checkbox"/>
            <div class="m-form__checkbox-indicator"></div>
          </label>

          <label class="m-form__checkbox -checkbox">Disabled & checked
            <input type="checkbox" disabled="disabled" checked="checked"/>
            <div class="m-form__checkbox-indicator"></div>
          </label>

          <label class="m-form__radio">First radio
            <input type="radio" name="radio" checked="checked"/>
            <div class="m-form__radio-indicator"></div>
          </label>
          <label class="m-form__radio">Second radio
            <input type="radio" name="radio"/>
            <div class="m-form__radio-indicator"></div>
          </label>
          <label class="m-form__radio">Disabled & checked
            <input type="radio" name="radio2" disabled="disabled" checked="checked"/>
            <div class="m-form__radio-indicator"></div>
          </label>
        </div>

        <div class="m-form__item">
          <label for="email">Email</label>
          <div class="m-form__select">
            <select>
              <option>First select</option>
              <option>Option</option>
              <option>Option</option>
            </select>
            <div class="m-form__select-arrow"></div>
          </div>
        </div>

        <div class="m-form__item">
          <div class="m-form__select">
            <select disabled="disabled">
              <option>Disabled</option>
              <option>Option</option>
              <option>Option</option>
            </select>
            <div class="m-form__select-arrow"></div>
          </div>
        </div>

        <button type="submit" class="s-button -broad">
          Submit
        </button>
        <span class="u-pad-x-small u-align-middle">
          or
        </span>
        <a href="#" class="s-head -inline -semi-bold u-align-middle">
          Close
        </a>
      </form>
    </div>
  </div>
</div>

```html
<form class="m-form -card">
  ...
</form>
```
