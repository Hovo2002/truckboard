import React from "react";
import PropTypes from "prop-types";

import Autosuggest from "react-autosuggest";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";

import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import carrierSearchCriteria from "./carrier-search-criteria";

const suggestions = [
  { label: "Afghanistan" },
  { label: "Aland Islands" },
  { label: "Brazil" },
  { label: "British Indian Ocean Territory" },
  { label: "Brunei Darussalam" }
];

function renderInput(inputProps) {
  const { classes, ref, ...other } = inputProps;

  return (
    <TextField
      fullWidth
      InputProps={{
        inputRef: ref,
        classes: {
          input: classes.input
        },
        ...other
      }}
    />
  );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.label, query);
  const parts = parse(suggestion.label, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map((part, index) => {
          return part.highlight ? (
            <span key={String(index)} style={{ fontWeight: 300 }}>
              {part.text}
            </span>
          ) : (
            <strong key={String(index)} style={{ fontWeight: 500 }}>
              {part.text}
            </strong>
          );
        })}
      </div>
    </MenuItem>
  );
}

function renderSuggestionsContainer(options) {
  const { containerProps, children } = options;

  return (
    <Paper {...containerProps} square>
      {children}
    </Paper>
  );
}

function getSuggestionValue(suggestion) {
  return suggestion.label;
}

function getSuggestions(value) {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
        const keep =
          count < 5 &&
          suggestion.label.toLowerCase().slice(0, inputLength) === inputValue;

        if (keep) {
          count = 1;
        }

        return keep;
      });
}

class CustomerSearchForm extends React.Component {
  state = {
    value: "",
    selectSearchVariant: "",
    suggestions: []
  };

  selectedChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  handleChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <form className={classes.searchForm} autoComplete="off">
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-simple">Choose</InputLabel>
            <Select
              value={this.state.selectSearchVariant}
              onChange={this.selectedChange}
              inputProps={{
                name: "selectSearchVariant"
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {carrierSearchCriteria.map(menuItem => {
                return (
                  <MenuItem value={menuItem.variant}>
                    {menuItem.variant}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </form>
        <Autosuggest
          theme={{
            container: classes.container,
            suggestionsContainerOpen: classes.suggestionsContainerOpen,
            suggestionsList: classes.suggestionsList,
            suggestion: classes.suggestion
          }}
          renderInputComponent={renderInput}
          suggestions={this.state.suggestions}
          onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
          renderSuggestionsContainer={renderSuggestionsContainer}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={{
            classes,
            placeholder: "Search",
            value: this.state.value,
            onChange: this.handleChange
          }}
        />
      </div>
    );
  }
}

const styles = theme => ({
  container: {
    flexGrow: 1,
    position: "relative",
    height: 250,
    marginLeft: "200px",
    marginTop: "-40px"
  },
  suggestionsContainerOpen: {
    position: "absolute",
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0
  },
  suggestion: {
    display: "block"
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: "none"
  },
  searchForm: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  }
});

CustomerSearchForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomerSearchForm);
